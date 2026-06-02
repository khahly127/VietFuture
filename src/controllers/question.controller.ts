import { Request, Response } from "express";

import {
    getAllQuestionsService,
    getQuestionByIdService,
    createQuestionService,
    updateQuestionService,
    deleteQuestionService
} from "../services/question.service";

const getAllQuestions = async (req: Request, res: Response) => {
    const questions = await getAllQuestionsService();
    return res.json(questions);
};

const getQuestionById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const question = await getQuestionByIdService(id);
    return res.json(question);
};

const createQuestion = async (req: Request, res: Response) => {
    const question = await createQuestionService(req.body);
    return res.json(question);
};

const updateQuestion = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const question = await updateQuestionService(id, req.body);
    return res.json(question);
};

const deleteQuestion = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteQuestionService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllQuestions,
    getQuestionById,
    createQuestion,
    updateQuestion,
    deleteQuestion
};
