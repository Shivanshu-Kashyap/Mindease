import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const authUser = async (req, res, next) => {
  const token = req.headers.token;

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not Authorized. Please login again.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decoded.id;
    next();
  } catch (error) {
    console.log('JWT Error:', error.message);
    return res.status(401).json({ success: false, message: 'Invalid or expired token. Please login again.' });
  }
};

export default authUser;
