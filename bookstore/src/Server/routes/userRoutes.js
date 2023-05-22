const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const session = require("express-session");

router.use(
  session({
    secret: "maythesessionbewithyou",
    resave: false,
    saveUninitialized: false,
  })
);

// Register route

router.post("/register", (req, res) => {
  const { username, email, password } = req.body; // Added 'username' destructuring

  // Hash the password
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Failed to hash password", err);
      return res.status(500).json({ message: "Failed to register user" });
    }

    const newUser = new User({
      username, // Added 'username' field
      email,
      password: hashedPassword,
    });

    newUser.save((error, data) => {
      if (error) {
        console.error("Failed to save user", error);
        return res.status(400).json({ status: false, error });
      }

      console.log("User registered successfully");
      return res.status(200).json({
        status: true,
        message: "User has been registered successfully",
        data,
      });
    });
  });
});

// Login route
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }, (error, user) => {
    if (error) {
      console.error("Failed to find user", error);
      return res.status(500).json({ message: "Failed to login" });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    bcrypt.compare(password, user.password, (error, isMatch) => {
      if (error) {
        console.error("Failed to compare passwords", error);
        return res.status(500).json({ message: "Failed to login" });
      }

      if (!isMatch) {
        return res.status(401).json({ message: "Invalid credentials" });
      }

      // Set the session property to the logged-in user's data
      req.session.user = {
        id: user._id,
        username: user.username,
        email: user.email,
      };

      console.log("Session data:", req.session.user);

      return res.json({ message: "Login successful" });
    });
  });
});


// Logout route
router.post("/logout", (req, res) => {
  // Destroy the session to log the user out
  req.session.destroy((error) => {
    if (error) {
      console.error("Failed to destroy session", error);
      return res.status(500).json({ message: "Failed to logout" });
    }
    return res.json({ message: "Logout successful" });
  });
});

// Get user route
router.get("/getUser", (req, res) => {
  // Retrieve the logged-in user's data from the session
  if (req.session.user) {
    return res.json(req.session.user);
  } else {
    return res.status(401).json({ message: "User not authenticated" });
  }
});


module.exports = router;
