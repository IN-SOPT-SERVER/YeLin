import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlewares";

const router: Router = Router();

//router.get("/:userId",auth, userController.getUserById);   //auth 추가

//CRUD

//Create(유저 생성) - POST api/user
router.post("/",userController.createUser);

//Read(전체 유저 조회) -GET api/user
router.get("/",userController.getAllUser);

//Update(유저 정보 갱신) - PATCH api/user/:userId
router.get(":/userId",userController.updateUser);

//Delete(유저 삭제) - DELETE api/user/:userId
router.get(":/userId",userController.deleteUser);




//* 유저 생성 - POST api/user
router.post(
  "/",
  [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],  //미들웨어인 express-validator 추가
  userController.createUser
);


//* 유저 로그인 - POST api/user/signin
router.post(
  "/signin",
  [
    body("email").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.signInUser
);



//* 이름으로 유저 검색 - GET api/user/search?keyword={}
//router.get("/search",userController.searchUserByName);

//* 이름으로 유저 검색 with 필터링 - GET api/user/search?keyword={}&option
router.get("/search",userController.searchUserByName);

export default router;
