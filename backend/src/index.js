import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

console.log(`read from .env ${process.env.PORT}`);

const app_port = process.env.PORT;

const startServer = async() => {
    try {
        await connectDB();
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });
        app.listen(app_port || 8000, () =>{
            console.log(`Server is running at port:
                ${process.env.PORT}`);
        });

    } catch (error) {
        console.log("MongoDB failed", error);

    }
}

startServer();