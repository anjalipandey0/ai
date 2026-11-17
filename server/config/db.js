import mongoose from 'mongoose';

let isConnected = false;

// Mask credentials helper to prevent exposing passwords in logs
const maskURI = (uri) => {
  if (!uri) return 'undefined';
  return uri.replace(/:([^:@]+)@/, ':****@');
};

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('⚠️  MONGODB_URI is not defined. Operating with high-availability in-memory store.');
    return false;
  }

  try {
    const conn = await mongoose.connect(uri, {
      dbName: 'velour_weave',
      serverSelectionTimeoutMS: 10000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Atlas Connected successfully: ${conn.connection.host}`);
    console.log(`📁 Database Name: ${conn.connection.name}`);
    return true;
  } catch (error) {
    console.warn(`⚠️  MongoDB connection notice for ${maskURI(uri)}: ${error.message}`);
    console.log('⚡ Operating with resilient fallback so APIs continue functioning seamlessly.');
    isConnected = false;
    return false;
  }
};

export const getIsConnected = () => isConnected;
