const router = require("express").Router();
const {
  signupForStaff,
  signupForOrganizer,
  signupForVerification,
  loginForAdmin,
  loginForOrganzier,
  generateToken,
  otpGenerate,
  verifyOtp,
  logout,
} = require("../controllers/authController");

router.post("/signup_staff", signupForStaff);
router.post("/signup_organizer", signupForOrganizer);
router.get("/verify/:userId/:token", signupForVerification);
router.post("/login_staff", loginForAdmin);
router.post("/login_organizer", loginForOrganzier);
router.post("/refresh", generateToken);
router.post("/get_otpcode", otpGenerate);
router.post("/verify_otpcode", verifyOtp);
router.post("/logout", logout);

module.exports = router;
