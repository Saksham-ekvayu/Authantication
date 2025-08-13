const express = require("express");
const {
  register,
  verifyOTP,
  resendOTP,
  login,
  getUserById,
  editProfile,
} = require("../controllers/auth.controller");
const { authenticateToken } = require("../middlewares/auth.middleware");
const {
  registerValidation,
  otpValidation,
  loginValidation,
  profileUpdateValidation,
} = require("../middlewares/validation");

const router = express.Router();

// Public routes
router.post("/register", registerValidation, register);
router.post("/verify-otp", otpValidation, verifyOTP);
router.post("/resend-otp", otpValidation, resendOTP);
router.post("/login", loginValidation, login);

// Protected routes
router.get("/user/:id", authenticateToken, getUserById);
router.put(
  "/profile/update",
  authenticateToken,
  profileUpdateValidation,
  editProfile
);

module.exports = router;
