// Blog submission and fetch logic

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.blog-form');
    const blogContainer = document.querySelector('.blog-container');
    const feedback = document.createElement('div');
    feedback.style.margin = '10px 0';
    form && form.appendChild(feedback);

    // Submit blog post
    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();
            feedback.textContent = 'Submitting...';
            feedback.style.color = 'black';
            const formData = new FormData(form);
            const data = {
                title: formData.get('title') || '',
                content: formData.get('content') || ''
            };
            try {
                const res = await fetch('http://localhost:3000/api/blogs', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                if (!res.ok) throw new Error('Server error ' + res.status);
                const result = await res.json();
                feedback.textContent = result.message || 'Blog posted!';
                feedback.style.color = 'green';
                form.reset();
                fetchBlogs();
            } catch (err) {
                feedback.textContent = 'Failed to submit blog. ' + (err.message || '');
                feedback.style.color = 'crimson';
            }
        });
    }

    // Fetch and display blogs
    async function fetchBlogs() {
        if (!blogContainer) return;
        blogContainer.innerHTML = '<em>Loading blogs...</em>';
        try {
            const res = await fetch('http://localhost:3000/api/blogs');
            if (!res.ok) throw new Error('Server error ' + res.status);
            const blogs = await res.json();
            if (!Array.isArray(blogs) || blogs.length === 0) {
                blogContainer.innerHTML = '<em>No blogs yet.</em>';
                return;
            }
            blogContainer.innerHTML = blogs.map(blog => `
                <div class="blog-post">
                    <h3>${blog.title}</h3>
                    <div class="blog-content">${blog.content.replace(/\n/g, '<br>')}</div>
                    <div class="blog-meta"><small>Posted on: ${new Date(blog.created_at).toLocaleString()}</small></div>
                </div>
                <hr>
            `).join('');
        } catch (err) {
            blogContainer.innerHTML = '<span style="color:crimson">Failed to load blogs.</span>';
        }
    }

    fetchBlogs();
});
