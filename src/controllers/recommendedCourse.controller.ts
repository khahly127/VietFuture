import { Request, Response } from "express";

import {
    getAllRecommendedCoursesService,
    getRecommendedCourseByIdService,
    createRecommendedCourseService,
    updateRecommendedCourseService,
    deleteRecommendedCourseService
} from "../services/recommendedCourse.service";

const getAllRecommendedCourses = async (req: Request, res: Response) => {
    const recommendations = await getAllRecommendedCoursesService();
    return res.json(recommendations);
};

const getRecommendedCourseById = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const recommendation = await getRecommendedCourseByIdService(id);
    return res.json(recommendation);
};

const createRecommendedCourse = async (req: Request, res: Response) => {
    const recommendation = await createRecommendedCourseService(req.body);
    return res.json(recommendation);
};

const updateRecommendedCourse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const recommendation = await updateRecommendedCourseService(id, req.body);
    return res.json(recommendation);
};

const deleteRecommendedCourse = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    await deleteRecommendedCourseService(id);
    return res.json({
        message: "Delete success"
    });
};

export {
    getAllRecommendedCourses,
    getRecommendedCourseById,
    createRecommendedCourse,
    updateRecommendedCourse,
    deleteRecommendedCourse
};
