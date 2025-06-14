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






## Screenshots

### Main page

<img width="960" alt="main page" src="https://github.com/user-attachments/assets/560d7d1e-7f40-44cb-8bb5-2407ed41119b" />


### Register/Signup page
<img width="960" alt="Register-Signup page" src="https://github.com/user-attachments/assets/aa659031-1698-4d6d-9264-b4ae6db84a34" />


### Login page
<img width="960" alt="Login" src="https://github.com/user-attachments/assets/ee693c27-36b4-4f3d-bf55-84748cfdcb92" />



### Dashboard page
<img width="960" alt="Dashboard" src="https://github.com/user-attachments/assets/9018b9f0-3413-45d8-b48f-d1cb04e8dea6" />

