import mongoose from "mongoose";

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log("こねくとおー");
    return;
  }
  mongoose.connect(
    process.env.MONGODB_URL,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUriParser: true,
      UseUnifiedTopology: true,
    },
    (err) => {
      if (err) throw err;
      console.log("こねくってどもんごでーベー");
    }
  );
};

export default connectDB;
