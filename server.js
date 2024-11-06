const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
const init = async () => {
  try {
    mongoose.connect(DB);
    console.log("Successfully conected to database");
  } catch (err) {
    console.log(err);
  }
};

init();

app.listen(process.env.PORT, (err) => {
  if (err) console.log("Server cannot start");
  console.log(`Server succussfully started at port number:${process.env.PORT}`);
});
