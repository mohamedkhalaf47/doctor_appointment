import jwt from "jsonwebtoken";

// admin authentication middleware

export const authUser = async (req, res, next) => {
  try {
    const userToken =
      req.headers["Authorization"] || req.headers["authorization"];

    const token = userToken.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Not Authorized Login Again" });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.body.userId = tokenDecode.id;

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: "error.message" });
  }
};
