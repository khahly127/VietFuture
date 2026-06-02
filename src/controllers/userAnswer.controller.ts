import { Request, Response } from "express";

import {
    getAllUserAnswersService,
    getUserAnswerByIdService,
    createUserAnswerService,
    updateUserAnswerService,
    deleteUserAnswerService
} from "../services/userAnswer.service";

const getAllUserAnswers = async (req: Request, res: Response) => {
    const answers = await getAllUserAnswersService();
    return res.json(answers);
};

const getUserAnswerById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const answer = await getUserAnswerByIdService(id);
    return res.json(answer);
};

const createUserAnswer = async (req: Request, res: Response) => {
    const answer = await createUserAnswerService(req.body);
    return res.json(answer);
};

const updateUserAnswer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const answer = await updateUserAnswerService(id, req.body);
    return res.json(answer);
};

const deleteUserAnswer = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteUserAnswerService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllUserAnswers,
    getUserAnswerById,
    createUserAnswer,
    updateUserAnswer,
    deleteUserAnswer
};
