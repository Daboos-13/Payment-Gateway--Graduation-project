import express, {Request, Response} from "express";
import {BadRequestError, requireAuth, restrictTo} from "@hashcash/common";
import {User} from "../models/user";
import {NotFoundError} from  "@hashcash/common";
import {sendSuccess} from "@hashcash/common";
import {Roles} from "../types/roles";
import mongoose from "mongoose";

const router = express.Router();


router.get('/:id',requireAuth,restrictTo([Roles.ADMIN]),async (req:Request,res:Response)=>{
    const {id} = req.params;
    if (!mongoose.isValidObjectId( id)){
        throw new NotFoundError(['user not found'])
    }
    const user = await User.findById(id);
    if (!user){
        throw new NotFoundError();
    }


    sendSuccess(res,200,user);

})

export {
    router as getUserRoute
}