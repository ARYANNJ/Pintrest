import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes /blog-routes.js";
import router from "./routes /user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://ADMIN:W04oONZeL3kf7q1n@cluster0.ck3tg7r.mongodb.net/NEWDB?retryWrites=true&w=majority"
  )
  .then(
    app.listen(8080, () => {
      console.log("app running on port 8080 Connected to mongodb");
    })
  )
  .catch((err) => console.log(err));
app.use("/", (req, res, next) => {
  res.send("Hello");
});
