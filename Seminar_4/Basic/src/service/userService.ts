const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createUser = async (userName: string,email: string, age:number ) => {
  const data = await prisma.user.create({
    data : {
      userName,
    email,
    age
    }
  });
  return data;
};

const getAllUser = async () => {
  const data = await prisma.user.findMany();

  return data;
};

const updateUser = async (userId: number, name: string) => {
  const data = await prisma.user.update({
    where: {
      id: userId,
    },
    data:{
      userName: name
    }
  });

  return data;
};

const deleteUser = async (userId: number) => {
  const user = await prisma.user.delete({
    where: {
      id: userId,
    },
  });

};


//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById
};

export default userService;
