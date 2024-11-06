const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRouter);

module.exports = app;
