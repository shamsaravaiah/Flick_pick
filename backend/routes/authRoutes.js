const express = require("express");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authControllers");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware"); 

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUserInfo", protect, getUserInfo);

router.post("/upload-image", upload.single("image"), (req, res) => {
    console.log("Received file:", req.file);

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
  
    const imageUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
    res.status(200).json({ imageUrl });
  });
  
module.exports = router;
