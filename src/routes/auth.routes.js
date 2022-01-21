import { Router } from "express";
import * as authCtrl from "../controller/auth.controlles";

const router = Router();

router.post("/signup", authCtrl.signUp);
router.post("/signin", authCtrl.signIn);

export default router;
