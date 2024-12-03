const mongoose = require("mongoose");
const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;



const connectDB = async(uri) => {
    try {
        // const mongoServer = new MongoMemoryServer()
        // await mongoServer.start();
        // console.log(mongoServer.getUri());
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected..");

    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;