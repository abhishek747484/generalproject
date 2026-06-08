import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/database.js";

dotenv.config();

const startServer = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT ||8000, () => {
            console.log(`Server is running on port ${process.env.PORT ||8000}`);
        });
    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }

}
startServer();