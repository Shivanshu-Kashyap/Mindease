import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors({
  origin: [
    'https://mindease-gamma.vercel.app/',
    'https://mindease-panel.vercel.app/',
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175'
  ],
  credentials: true
}));

// Block unwanted websocket upgrades
app.use((req, res, next) => {
  if (req.headers.upgrade?.toLowerCase() === 'websocket') {
    console.warn('Blocked WebSocket attempt to:', req.originalUrl);
    return res.status(400).json({ success: false, message: 'WebSocket not supported' });
  }
  next();
});

// Routes
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

// Catch-all handler for unknown routes
app.use((req, res) => {
  console.warn('Invalid route hit:', req.originalUrl);
  res.status(404).json({ success: false, message: `Invalid route: ${req.originalUrl}` });
})

app.listen(port, () => console.log(`Server started on PORT:${port}`))
