// src/api/members.ts

import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "members 조회 성공",
    member: [
        {
            name: "권세훈",
            group: "ob",
        }, {
            name: "김예린",
            group: "yb"
        }, {
            name: "이서우",
            group: "yb"
        }, {
            name: "조하얀",
            group: "yb"
        }
    ]
  });
});

module.exports = router;