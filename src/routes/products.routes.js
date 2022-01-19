import { Router } from "express";
import * as productsCtrl from "../controller/products.controler";
const router = Router();

router.post("/", productsCtrl.createProduct);
router.get("/", productsCtrl.getProducts);

export default router;
