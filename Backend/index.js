import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

// Configure CORS
app.use(cors({
    origin: '*', // Allow all origins (for development; be specific in production)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(express.json());

const PORT = 4001; // Use environment variable or default to 4001
const URI =  "mongodb+srv://rishabhy122004:rishabhPAPA@cluster0.nbogt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"; // Use environment variable or default

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("MongoDB connection error:", err));

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
