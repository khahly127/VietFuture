import { Request, Response } from "express";

import {
    getAllQuestionOptionsService,
    getQuestionOptionByIdService,
    createQuestionOptionService,
    updateQuestionOptionService,
    deleteQuestionOptionService
} from "../services/questionOption.service";

const getAllQuestionOptions = async (req: Request, res: Response) => {
    const options = await getAllQuestionOptionsService();
    return res.json(options);
};

const getQuestionOptionById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const option = await getQuestionOptionByIdService(id);
    return res.json(option);
};

const createQuestionOption = async (req: Request, res: Response) => {
    const option = await createQuestionOptionService(req.body);
    return res.json(option);
};

const updateQuestionOption = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const option = await updateQuestionOptionService(id, req.body);
    return res.json(option);
};

const deleteQuestionOption = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteQuestionOptionService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllQuestionOptions,
    getQuestionOptionById,
    createQuestionOption,
    updateQuestionOption,
    deleteQuestionOption
};
