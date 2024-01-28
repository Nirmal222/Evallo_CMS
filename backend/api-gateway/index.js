const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;
const dbConnect = require("./src/config/dbConnect");
// Routers 
const userRouter = require('./src/features/users/user.router.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);

app.get("/", async (req, res) => {
    res.send('Backend is running successfully!')
})

// listen
dbConnect().then(() => {
    app.listen(PORT, async () => {
        // feedback: fw16_644 - you can connect db at the top or before calling cors or other configuration
        console.log(`Listening on port: http://localhost:${PORT}`);
    })
})