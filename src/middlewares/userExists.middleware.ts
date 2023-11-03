import { NextFunction, Response, response } from "express";

export const userExistsMiddleware = (req:Request res:Response next:NextFunction): <Response> => {
    const userId = req.id


    return response
};
