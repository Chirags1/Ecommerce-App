const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const mongoose = require("./config/mongoose-connection");
const categoryRouter = require("./Routes/category");
const brandRouter = require("./Routes/brand");
const productRouter = require("./Routes/product");
const userRouter = require("./Routes/auth");
const { verifyToken, isAdmin } = require("./middlewares/auth-middleware");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/category", categoryRouter);
app.use("/brand", verifyToken, isAdmin, brandRouter);
app.use("/product", verifyToken, isAdmin, productRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Running");
});

app.listen(port, () => {
  console.log("Server Started on PORT" + port);
});
