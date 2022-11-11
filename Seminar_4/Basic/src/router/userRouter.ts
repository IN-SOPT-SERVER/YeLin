import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();

router.get("/:userId", userController.getUserById);

//CRUD

//Create(유저 생성) - POST api/user
router.post("/",userController.createUser);

//Read(전체 유저 조회) -GET api/user
router.get("/",userController.getAllUser);

//Update(유저 정보 갱신) - PATCH api/user/:userId
router.get(":/userId",userController.updateUser);

//Delete(유저 삭제) - DELETE api/user/:userId
router.get(":/userId",userController.deleteUser);

export default router;
