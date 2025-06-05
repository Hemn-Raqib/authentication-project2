# Node.js Passport Authentication Project

An authentication project built with **Express.js** framework, using **Passport.js** for authentication and rendering client-side views using **EJS** templating.

---

## Features

- User registration with validation (name, email, password, password confirmation)
- Password hashing with `bcryptjs`
- User login and logout with session management
- Simple in-memory user database (mock)
- Protected dashboard view
- EJS layouts for consistent UI
- Flash messages for error handling (planned)

---

## Technologies Used

- Node.js
- Express.js
- Passport.js (passport-local strategy)
- EJS & express-ejs-layouts
- bcryptjs for password hashing
- uuid for unique user IDs (if needed)
- body-parser (via `express.urlencoded`)
- Mongoose dependency included but commented (future DB integration possible)

---

## Installation & Running


npm install
node/nodemon app.js

http://localhost:3000

