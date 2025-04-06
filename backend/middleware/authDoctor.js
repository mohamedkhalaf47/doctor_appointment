import jwt from "jsonwebtoken";

export const authDoctor = async (req, res, next) => {
  try {
    const doctorToken =
      req.headers["Authorization"] || req.headers["authorization"];

    const token = doctorToken.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .json({ success: false, message: "Token Not Found" });
    }

    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.body.docId = tokenDecode.id

    if (!tokenDecode) {
      return res
        .status(400)
        .json({ success: false, message: "Token Isn't Right" });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};
