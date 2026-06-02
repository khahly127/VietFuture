import express from "express";

import {
    getAllAssessmentAttempts,
    getAssessmentAttemptById,
    createAssessmentAttempt,
    updateAssessmentAttempt,
    deleteAssessmentAttempt
} from "../controllers/assessmentAttempt.controller";

const router = express.Router();

router.get("/", getAllAssessmentAttempts);
router.get("/:id", getAssessmentAttemptById);
router.post("/", createAssessmentAttempt);
router.put("/:id", updateAssessmentAttempt);
router.delete("/:id", deleteAssessmentAttempt);

export default router;
