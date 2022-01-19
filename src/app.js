import express from "express";
import morgan from "morgan";
import productsRoutes from "./routes/products.routes";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.json({ message: "Hola Mundo" });
});

app.use("/api/products", productsRoutes);

export default app;
