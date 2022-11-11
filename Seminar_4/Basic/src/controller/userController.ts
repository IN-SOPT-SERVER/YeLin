import { Request, Response } from "express";
import { userService } from "../service";


const createUser = async(req:Request , res:Response) => {
  const {userName,email,age} = req.body;

  const data = await userService.createUser(userName,email,age);

  if(!data){
    return res.status(400).json(
      { status: 400, message: "유저 생성 실패" }
      );
  }
  return res.status(200).json(
    { status: 200, message: "유저 생성 성공", data }
    );

  
};

const getAllUser = async(req: Request, res:Response) => {
  const data = await userService.getAllUser();
  return res.status(400).json(
    { status: 400, message: "유저 조회 실패" }
    );
};

const updateUser = async(req: Request, res: Response) => {
  const {name}  = req.body;
  const {userId} = req.params;  //string 으로 값을 읽어옴

  if(!name){
    return res.status(400).json({ status: 400, message: "유저 업데이트 실패" });
  }
  
  const updatedUser = await userService.updateUser(+userId, name);   // +로 type casting
  return res.status(200).json({ status: 200, message: "유저 업데이트 성공",updatedUser });
};

const deleteUser = async(req: Request, res: Response) => {
  const {userId} = req.params;
  await userService.deleteUser(+userId);
  return res.status(200).json({ status: 200, message: "유저 삭제 성공"});

};


const getUserById = async (req: Request, res: Response) => {
  const { userId } = req.params;

  const data = await userService.getUserById(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "유저 조회 성공", data });
};



const userController = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById
};

export default userController;
