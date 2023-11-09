import express from 'express';
import 'dotenv/config';
import cors from 'cors'
import { connectDB } from './database/connection.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import { v2 as cloudinary } from 'cloudinary';
// import session from 'express-session';


// routes import

import userRoute from './routes/userRoute.js';
import playListRoute from './routes/playListRouter.js';
import videoRoute from './routes/videoRouter.js';



const server = express();

// Data Base connection
connectDB()


// cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// Using Middlewares
// Increase the request size limit for JSON data
server.use(bodyParser.json({ limit: '50mb' }));

// Increase the request size limit for URL-encoded data
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

server.use(express.json());
server.use(cookieParser());
server.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB (adjust this as needed)
}));

server.use(
  cors({
    origin: process.env.FRONTEND_URL,
    exposedHeaders: ['X-Total-Count'],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);


// API

server.use("/api/user", userRoute);
server.use("/api/playlist", playListRoute);
server.use("/api/video", videoRoute);


server.get("/", (req, res) => [
  res.send("Saniyaj from backend")
])




server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})