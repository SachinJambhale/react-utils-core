const express = require("express");
const router = express.Router();
const { register, login, logout } = require("../Controller/authController");

router.post("/register", register); // /api/auth/register

router.post("/login", login); // /api/auth/login

router.get("/logout", logout); // /api/auth/logout

module.exports = router;
