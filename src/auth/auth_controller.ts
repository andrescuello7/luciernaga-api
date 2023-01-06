import { Request, Response } from 'express';

export class authController {
    async getAuth(req: Request, res: Response) {
        try {
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method get");
        }
    }

    async postAuth(req: Request, res: Response) {
        try {
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method post");
        }
    }

    async putAuth(req: Request, res: Response) {
        try {
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method put");
        }
    }

    async deleteAuth(req: Request, res: Response) {
        try {
        } catch (error) {
            console.log(error);
            res.status(400).send("error in method delete");
        }
    }
}