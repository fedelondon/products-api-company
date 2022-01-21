import { Router } from "express";
import * as productsCtrl from "../controller/products.controler";
const router = Router();

router.post("/", productsCtrl.createProduct); //Crea un nuevo producto
router.get("/", productsCtrl.getProducts); //Muestra todos los productos
router.put("/:productId", productsCtrl.updateProductById); //Actualiza un producto mediante su id
router.get("/:productId", productsCtrl.getProductById); //Busca y muestra el procucto por su id

export default router;
