const express = require("express");
const { listUsers } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

function requireAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Acceso solo para administradores" });
  }
  next();
}

router.get("/all", authMiddleware, requireAdmin, listUsers);

module.exports = router;
