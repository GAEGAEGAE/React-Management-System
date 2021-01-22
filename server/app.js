import express from 'express'
import mongoose from 'mongoose'
import config from './config'
import hpp from "hpp";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

// Routes
import postsRoutes from "./routes/api/post";
import userRoutes from "./routes/api/user";
import authRoutes from "./routes/api/auth";






const app = express();
const {MONGO_URI} = config

// 보안모듈
app.use(hpp());
app.use(helmet());

// 
app.use(cors({origin: true, credentials:true}));
app.use(morgan("dev"));

// BODY의 데이터를 해석하기 위한 모듈
app.use(express.json());

mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("MongoDB connecting Success!!"))
    .catch((e) => console.log(e));



// Use Router
app.get('/')
app.use('/api/post', postsRoutes);
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

export default app;