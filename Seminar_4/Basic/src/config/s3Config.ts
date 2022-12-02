// src/config/s3Config.ts
//AWS SDK 모듈을 이용하여 해당 모듈이 제공하는 여러 메서드들을 담은 S3 객체를 만들어는 함수

import { S3Client } from "@aws-sdk/client-s3";
import config from ".";

const s3: S3Client = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: config.s3AccessKey,
    secretAccessKey: config.s3SecretKey,
  },
});

export default s3;