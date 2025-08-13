# Authentication System with Email OTP Verification

A complete authentication system built with Node.js, Express, MongoDB, and email OTP verification. The system includes user registration with email verification, secure password handling, and a modern UI.

## Features

- User registration with email verification
- OTP-based email verification
- Password strength validation
- Secure password hashing
- JWT-based authentication
- Modern and responsive UI
- Input validation and error handling
- MongoDB database integration
- Email service integration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- Gmail account (for sending emails)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd authentication-system
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/auth-system
JWT_SECRET=your_jwt_secret_key
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_email_app_password
```

Note: For Gmail, you'll need to use an App Password. To generate one:

1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App Passwords
5. Generate a new app password for your application

## Running the Application

1. Start MongoDB:

```bash
mongod
```

2. Start the server:

```bash
npm start
```

For development with auto-reload:

```bash
npm run dev
```

The server will start on http://localhost:5000

## API Endpoints

### Authentication

- `POST /api/auth/register`

  - Register a new user
  - Required fields: firstName, lastName, email, password

- `POST /api/auth/verify-otp`

  - Verify email OTP
  - Required fields: email, otp

- `POST /api/auth/resend-otp`
  - Resend OTP email
  - Required fields: email

## Frontend Pages

- `/register.html` - User registration page
- `/verify-otp.html` - Email verification page

## Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- Email verification
- Input validation and sanitization
- Secure password requirements
- Rate limiting for OTP requests
- OTP expiration after 10 minutes

## Error Handling

The system includes comprehensive error handling for:

- Invalid input data
- Duplicate email addresses
- Invalid OTP
- Expired OTP
- Server errors
- Email sending failures

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
