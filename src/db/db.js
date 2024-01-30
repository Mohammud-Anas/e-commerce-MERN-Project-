import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connectionResponse = await mongoose.connect(
      `${process.env.MONGODB_URI} `
    );
    console.log(
      `\n MongoDb connected  !! DB Host : ${connectionResponse.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection error: ", error);
    process.exit(1);
  }
};

export default connectDb;
