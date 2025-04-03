import jwt from "jsonwebtoken";

// admin authentication middleware

export const authAdmin = async (req, res, next) => {
  try {
    const adminToken =
      req.headers["Authorization"] || req.headers["authorization"];

    const token = adminToken.split(" ")[1];

    if (!token) {
      return res.status(400).json({ success: false, message: "Token Not Found" });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!tokenDecode) {
      return res.status(400).json({ success: false, message: "Token Isn't Right" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "error.message" });
  }
};
