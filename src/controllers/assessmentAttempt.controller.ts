import { Request, Response } from "express";

import {
    getAllAssessmentAttemptsService,
    getAssessmentAttemptByIdService,
    createAssessmentAttemptService,
    updateAssessmentAttemptService,
    deleteAssessmentAttemptService
} from "../services/assessmentAttempt.service";

const getAllAssessmentAttempts = async (req: Request, res: Response) => {
    const attempts = await getAllAssessmentAttemptsService();
    return res.json(attempts);
};

const getAssessmentAttemptById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const attempt = await getAssessmentAttemptByIdService(id);
    return res.json(attempt);
};

const createAssessmentAttempt = async (req: Request, res: Response) => {
    const attempt = await createAssessmentAttemptService(req.body);
    return res.json(attempt);
};

const updateAssessmentAttempt = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const attempt = await updateAssessmentAttemptService(id, req.body);
    return res.json(attempt);
};

const deleteAssessmentAttempt = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteAssessmentAttemptService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllAssessmentAttempts,
    getAssessmentAttemptById,
    createAssessmentAttempt,
    updateAssessmentAttempt,
    deleteAssessmentAttempt
};
