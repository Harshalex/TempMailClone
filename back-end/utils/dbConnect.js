
import mongoose from "mongoose";

// MongoDB Connection
const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('✅ MongoDB Atlas connected successfully!'))
      .catch((err) => console.error('❌ MongoDB connection error:', err));
}

export default dbConnect;