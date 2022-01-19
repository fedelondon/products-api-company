import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/companydb", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.log(err));
