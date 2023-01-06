import userModel from "./user_model";
            import { Request, Response } from 'express';
            
            export class userController {
                async getUser(req: Request, res: Response) {
                    try {
                        const response = await userModel.find();
                        res.send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method get");
                    }
                }
            
                async postUser(req: Request, res: Response) {
                    try {
                        const model = new userModel({
                            ...req.body,
                            CreateAdd: Date.now(),
                        });
                        const response = await model.save();
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method post");
                    }
                }
            
                async putUser(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await userModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method put");
                    }
                }
            
                async deleteUser(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await userModel.findByIdAndRemove(id);
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method delete");
                    }
                }
            }