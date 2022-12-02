import { UserCreateDTO } from "../interfaces/user/UserCreateDTO";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { sc } from "../constants";
import { UserSignInDTO } from "../interfaces/user/UserSignInDTO";


const prisma = new PrismaClient();



/* 이전 버전 */
/*
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
*/

// src/service/userService.ts
//* 유저 생성
const createUser = async (userCreateDto: UserCreateDTO) => {
  //? 넘겨받은 password를 bcrypt의 도움을 받아 암호화
  const salt = await bcrypt.genSalt(10); //^ 매우 작은 임의의 랜덤 텍스트 salt
  const password = await bcrypt.hash(userCreateDto.password, salt); //^ 위에서 랜덤을 생성한 salt를 이용해 암호화

  const data = await prisma.userrrr.create({
    data: {
      userName: userCreateDto?.name,
      age: userCreateDto?.age,
      email: userCreateDto.email,
      password,
    },
  });

  return data;
};


//* 로그인
const signIn = async (userSignInDto: UserSignInDTO) => {
  try {
    const user = await prisma.userrrr.findFirst({
      where: {
        email: userSignInDto.email,
      },
    });
    if (!user) return null;

    //? bcrypt가 DB에 저장된 기존 password와 넘겨 받은 password를 대조하고,
    //? match false시 401을 리턴
    const isMatch = await bcrypt.compare(userSignInDto.password, user.password);
    if (!isMatch) return sc.UNAUTHORIZED;

    return user.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
};







// const getAllUser = async () => {
//   const data = await prisma.userrrr.findMany();

//   return data;
// };

//pagination 기능 추가
const getAllUser = async (page: number, limit: number) => {
  const data = await prisma.userrrr.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });

  return data;
};

const updateUser = async (userId: number, name: string) => {
  const data = await prisma.userrrr.update({
    where: {
      id: userId,
    },
    data:{
      userName: name,
    }
  });

  return data;
};

const deleteUser = async (userId: number) => {
  const user = await prisma.userrrr.delete({
    where: {
      id: userId,
    },
  });

};


//* userId로 유저 조회
const getUserById = async (userId: number) => {
  const user = await prisma.userrrr.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
};



// //* 이름으로 유저 조회 (query)
// const searchUserByName =async (keyword:string) => {
//   const data = await prisma.userrrr.findMany({
//     where:{
//       userName: {
//         contains: keyword //keyword를 포함하고 있는 애들을 싹다 반환
//       }
//     }
//   })
//   return data;
// }

//* 이름으로 유저 조회 (query with option)
const searchUserByName =async (keyword:string, option: string ) => {
 
  //createdAt기준 내림차순 정렬
  if(option === 'desc'){   //등호 세개(===) : 타입까지 비교하는 동치연산자. 두 값이 동일하고 타입까지 일치하는 경우에만 true를 리턴
    const data = await prisma.userrrr.findMany({
      where: {
        userName: {
          contains: keyword,   //keyword를 포함하고 있는 애들을 싹다 반환
        },
      },
      orderBy: {
        createdAt: 'desc',   //createdAt 기준 내림차순 --> 최신순
      },
    })
    return data;
  }

  //오름차순 정렬
  if( option === 'asc'){
    const data = await prisma.userrrr.findMany({
      where: {
        userName: {
          contains: keyword,
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    })
    return data;
  }

  //이름기준 내림차순 정렬 
  if(option === "nameDesc"){
    const data = await prisma.userrrr.findMany({
      where: {
        userName: {
          contains: keyword,
        },
      },
      orderBy: {
        userName: 'desc',
      },
    })
    return data;
  }

  //오름차순 정렬
  if(option === "nameAsc"){
    const data = await prisma.userrrr.findMany({
      where: {
        userName: {
          contains: keyword,
        },
      },
      orderBy: {
        userName: 'asc',
      },
    })
    return data;
  }

}

const userService = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getUserById,
  signIn,
  searchUserByName,

};

export default userService;
