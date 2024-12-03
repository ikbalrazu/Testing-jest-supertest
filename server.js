const app = require('./app');
const connectDB = require('./database');

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("server run",PORT);
    connectDB();
})