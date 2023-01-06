import taskModel from "./task_model";
            import { Request, Response } from 'express';
            
            export class taskController {
                async getTask(req: Request, res: Response) {
                    try {
                        const response = await taskModel.find();
                        res.send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method get");
                    }
                }
            
                async postTask(req: Request, res: Response) {
                    try {
                        const model = new taskModel({
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
            
                async putTask(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await taskModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method put");
                    }
                }
            
                async deleteTask(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await taskModel.findByIdAndRemove(id);
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method delete");
                    }
                }
            }