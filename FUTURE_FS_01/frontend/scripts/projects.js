// Client-side JS to POST project data to backend and render projects
(function () {
    const form = document.getElementById('projectForm');
    const feedback = document.getElementById('formFeedback');
    const projectContainer = document.querySelector('.project-div');

    // helper to escape content for insertion into DOM
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // Render a single project element and append it to .project-div
    function renderProject(p, markDynamic = true) {
        const el = document.createElement('div');
        el.className = 'project-container' + (markDynamic ? ' dynamic-project' : '');
        el.innerHTML = `
            <h2>Title: ${escapeHtml(p.title || '')}</h2>
            <div class="project-language">Language Used: ${escapeHtml(p.language || p.projectLangauge || '')}</div>
            <div class="project-content"><p>${escapeHtml(p.content || p.projectContent || '').replace(/\n/g, '<br>')}</p></div>
            <div class="project-date"><small>Date: ${new Date(p.created_at || p.date || Date.now()).toLocaleString()}</small></div>
        `;
        projectContainer.appendChild(el);
    }

    // Remove previously rendered dynamic projects
    function clearDynamicProjects() {
        const dyn = projectContainer.querySelectorAll('.dynamic-project');
        dyn.forEach(n => n.remove());
    }

    // Fetch projects from backend; fallback to localStorage
    async function fetchProjects() {
        clearDynamicProjects();
        // try backend first
        try {
            const res = await fetch('http://localhost:3000/api/projects');
            if (!res.ok) throw new Error('Server returned ' + res.status);
            const projects = await res.json();
            if (Array.isArray(projects) && projects.length) {
                projects.forEach(p => renderProject(p, true));
                return;
            }
        } catch (err) {
            // ignore and fallback to localStorage
            // console.warn('Fetch projects failed, falling back to localStorage', err);
        }

        // fallback
        const stored = localStorage.getItem('projects');
        if (stored) {
            try {
                const arr = JSON.parse(stored);
                arr.forEach(p => renderProject(p, true));
                return;
            } catch (e) {
                // invalid JSON
            }
        }
        // no projects found — nothing to do (preserve static examples)
    }

    // Submit handler: send to backend; on failure save to localStorage
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            feedback.textContent = 'Sending...';
            feedback.style.color = 'black';

            // read form fields by their IDs (matches projects.html)
            const titleEl = document.getElementById('project');
            const langEl = document.getElementById('projectLanguage');
            const contentEl = document.getElementById('projectContent');

            const data = {
                title: titleEl ? titleEl.value.trim() : '',
                language: langEl ? langEl.value.trim() : '',
                content: contentEl ? contentEl.value.trim() : ''
            };

            // basic client-side validation
            if (!data.title || !data.content) {
                feedback.style.color = 'crimson';
                feedback.textContent = 'Please provide title and content.';
                return;
            }

            // try to send to backend
            try {
                const res = await fetch('http://localhost:3000/api/projects', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (!res.ok) throw new Error('Server error ' + res.status);
                const result = await res.json();
                feedback.style.color = 'green';
                feedback.textContent = result.message || 'Project Submitted successfully.';
                form.reset();
                // re-fetch to include the new project
                fetchProjects();
                return;
            } catch (err) {
                // backend failed — save locally
                feedback.style.color = 'orange';
                feedback.textContent = 'Could not reach server — saved locally.';
                try {
                    const stored = JSON.parse(localStorage.getItem('projects') || '[]');
                    const item = Object.assign({ created_at: new Date().toISOString() }, data);
                    stored.unshift(item);
                    localStorage.setItem('projects', JSON.stringify(stored));
                    renderProject(item, true);
                    form.reset();
                } catch (e) {
                    feedback.style.color = 'crimson';
                    feedback.textContent = 'Failed to save locally.';
                }
            }
        });
    }

    // initial load
    fetchProjects();
})();