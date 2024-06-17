const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser"); //using access cookie data

const cors = require("cors");

const router = require("./Router/userRouter/userRoute");

const servicesRouter = require("./Router/adminRouter/productsRouter");
const reviewsRouter = require("./Router/adminRouter/reviewsRouter");
const offerpageRouter = require("./Router/ProductRouter/productRouter");

const app = express();
const port = 5000;

app.use(cors());

// Use middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(cookieParser());

// Use the router
app.use("/api", router);
app.use("/", servicesRouter);

//use static files
// app.use(express.static("./uploads/offerImage"));
app.use("/", offerpageRouter);
app.use("/", servicesRouter);
app.use("/", reviewsRouter);

mongoose
  .connect(
    "mongodb+srv://mabinaya2112:eirMqt43N169P1AM@cluster0.a8vdf5i.mongodb.net/E_com_herbal"
  )
  .then(() => console.log("database is connect"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
