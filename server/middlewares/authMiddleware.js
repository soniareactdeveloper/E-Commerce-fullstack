const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  try {
    const token = req.header("authorization");
    if (!token) {
      return res.status(401).json({ error: "Access denied. No token provided." });
    }

    jwt.verify(token, process.env.JWT_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(400).json({ error: "Invalid or expired token" });
      }

      if (decoded?.data) {
        req.user = decoded.data;
        return next();
      } else {
        return res.status(400).json({ error: "Bad token structure" });
      }
    });

  } catch (error) {
    console.error("Auth Middleware Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = authMiddleware;
