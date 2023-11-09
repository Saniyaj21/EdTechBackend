import express from 'express';
import 'dotenv/config';
import cors from 'cors'


const server = express()



server.use(express.json());

server.use(
  cors({
    origin: process.env.FRONTEND_URL,
    exposedHeaders: ['X-Total-Count'],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);



server.get("/", (req, res) => [
  res.send("Saniyaj from backend")
])




server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`)
})