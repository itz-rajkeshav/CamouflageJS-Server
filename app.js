import express from "express"
import http from 'http'
import dotenv from 'dotenv';
import obfuscatorRoute from "./routes.js"
import cors from 'cors'; 
const app=express()
const server = http.createServer(app);
dotenv.config(); 
app.use(express.json());
app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true,
    })
  );
  app.get('/', (req, res) => {
    res.send('Express server');
  });
  app.use('/api', obfuscatorRoute);
  const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
