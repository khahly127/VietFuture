import express from "express";

import {
    getAllRecommendedCourses,
    getRecommendedCourseById,
    createRecommendedCourse,
    updateRecommendedCourse,
    deleteRecommendedCourse
} from "../controllers/recommendedCourse.controller";

const router = express.Router();

router.get("/", getAllRecommendedCourses);
router.get("/:id", getRecommendedCourseById);
router.post("/", createRecommendedCourse);
router.put("/:id", updateRecommendedCourse);
router.delete("/:id", deleteRecommendedCourse);

export default router;
