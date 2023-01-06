import historyModel from "./history_model";
            import { Request, Response } from 'express';
            
            export class historyController {
                async getHistory(req: Request, res: Response) {
                    try {
                        const response = await historyModel.find();
                        res.send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method get");
                    }
                }
            
                async postHistory(req: Request, res: Response) {
                    try {
                        const model = new historyModel({
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
            
                async putHistory(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await historyModel.findOneAndUpdate({ _id: id }, req.body, { new: true });
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method put");
                    }
                }
            
                async deleteHistory(req: Request, res: Response) {
                    const { id } = req.params;
                    try {
                        const response = await historyModel.findByIdAndRemove(id);
                        res.status(200).send(response);
                    } catch (error) {
                        console.log(error);
                        res.status(400).send("error in method delete");
                    }
                }
            }