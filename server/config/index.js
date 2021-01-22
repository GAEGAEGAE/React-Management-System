import dotenv from 'dotenv'
dotenv.config();

export default {
    MONGO_URI: "mongodb+srv://new-user_01:qw123456@cluster0.xiy13.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
};
