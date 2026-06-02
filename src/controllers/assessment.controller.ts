import { Request, Response } from "express";

import {
    getAllAssessmentsService,
    getAssessmentByIdService,
    createAssessmentService,
    updateAssessmentService,
    deleteAssessmentService
} from "../services/assessment.service";

const getAllAssessments = async (req: Request, res: Response) => {
    const assessments = await getAllAssessmentsService();
    return res.json(assessments);
};

const getAssessmentById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const assessment = await getAssessmentByIdService(id);
    return res.json(assessment);
};

const createAssessment = async (req: Request, res: Response) => {
    const assessment = await createAssessmentService(req.body);
    return res.json(assessment);
};

const updateAssessment = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const assessment = await updateAssessmentService(id, req.body);
    return res.json(assessment);
};

const deleteAssessment = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteAssessmentService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllAssessments,
    getAssessmentById,
    createAssessment,
    updateAssessment,
    deleteAssessment
};
