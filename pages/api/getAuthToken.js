import jwt from "jsonwebtoken";

const secretKey = process.env.JWT_SECRET; 

export default function handler(req, res) {
  try {
    const token = jwt.sign({}, secretKey, { expiresIn: "2m" });

    res.setHeader("Set-Cookie", `authToken=${token}; HttpOnly; Secure`);

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error generating authentication token:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
