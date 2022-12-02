import { Router } from "express";
import { imageController } from "../controller";
import { upload } from "../middlewares";     
//import upload from "../middlewares/upload";   //위의 형식이 좀 더 간결
 
const router: Router = Router();


router.post("/", upload.single("file"), imageController.uploadImage);

export default router;