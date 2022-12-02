import { fail, success } from './../constants/response';
import { Request, Response } from 'express';
import { sc, rm } from '../constants';
import { imageService } from "../service";

const uploadImage = async (req:Request, res:Response) => {
    const image: Express.MulterS3.File = req.file as Express.MulterS3.File;

    const {location}= image;    //const location = image.location;  
                                //location : s3가 생성해준 object url
   
    if(!location){
        res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.NO_IMAGE));
    }

    const data = await imageService.uploadImage(location);

    if(!data){
        res.status(sc.BAD_REQUEST).send(fail(sc.BAD_REQUEST, rm.CREATE_IMAGE_FAIL));
    }

    res.status(sc.CREATED).send(success(sc.CREATED,rm.CREATE_IMAGE_SUCCESS,data));
    
    
}

const imageController = {
    uploadImage,

}

export default imageController;