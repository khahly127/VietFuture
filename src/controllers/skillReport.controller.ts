import { Request, Response } from "express";

import {
    getAllSkillReportsService,
    getSkillReportByIdService,
    createSkillReportService,
    updateSkillReportService,
    deleteSkillReportService
} from "../services/skillReport.service";

const getAllSkillReports = async (req: Request, res: Response) => {
    const reports = await getAllSkillReportsService();
    return res.json(reports);
};

const getSkillReportById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const report = await getSkillReportByIdService(id);
    return res.json(report);
};

const createSkillReport = async (req: Request, res: Response) => {
    const report = await createSkillReportService(req.body);
    return res.json(report);
};

const updateSkillReport = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const report = await updateSkillReportService(id, req.body);
    return res.json(report);
};

const deleteSkillReport = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteSkillReportService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllSkillReports,
    getSkillReportById,
    createSkillReport,
    updateSkillReport,
    deleteSkillReport
};
