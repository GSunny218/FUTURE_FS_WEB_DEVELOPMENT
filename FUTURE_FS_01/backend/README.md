# Backend (Express + MySQL)

This small backend receives contact form submissions and stores them in a MySQL database.

## Setup
1. Copy `.env.example` to `.env` and fill in your DB credentials.
2. Create the database and table using the `db.sql` script (run in your MySQL client):
   - `mysql -u root -p < db.sql`
3. From the `backend` folder, install dependencies and start the server:

```powershell
# from d:\FUTURE_FS_WEB_DEVELOPMENT\FUTURE_FS_01\backend
npm install
npm run start
# or for development with restarts:
npm run dev
```

The server listens on the port specified in `.env` (default 3000). The endpoint is `POST /api/contact` and expects JSON:

```json
{ "name": "...", "email": "...", "phone": "...", "message": "..." }
```

It returns 201 with `{ message: 'Contact saved', id: <insertId> }` on success.

## Security notes
- This example uses parameterized queries to avoid SQL injection.
- For production, use TLS, proper validation, rate limiting, and consider storing secrets in a secure vault.
