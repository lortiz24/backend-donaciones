import {Response,Request} from 'express'
export const createUser = (req:Request, res:Response) => {
    res.json({msg:'Get-Controller'})
}