import mongoose from "mongoose";

let isConnected = false;

export async function connectToDatabase() {
    if (isConnected) return;

    const uri = process.env.MONGO_URI;
    if (!uri) {
        const msg =
            "MONGO_URI environment variable is not set. Add it to .env.local or your environment and restart the server.";
        throw new Error(msg);
    }

    try {
        // Do NOT log the full URI (contains credentials). Log presence only.
        console.log("Using MongoDB URI: present (not logged for security)");

        const db = await mongoose.connect(uri, {
            // recommended options are now defaults in newer mongoose versions
        });

        // mongoose.connections[0].readyState === 1 means connected
        isConnected = db.connections[0].readyState === 1;
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error("❌ MongoDB connection failed:", error);
        // Re-throw so the route handler can respond with a 500 and logs show the root cause.
        throw error;
    }
}
