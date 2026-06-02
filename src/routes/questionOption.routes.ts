import express from "express";

import {
    getAllQuestionOptions,
    getQuestionOptionById,
    createQuestionOption,
    updateQuestionOption,
    deleteQuestionOption
} from "../controllers/questionOption.controller";

const router = express.Router();

router.get("/", getAllQuestionOptions);
router.get("/:id", getQuestionOptionById);
router.post("/", createQuestionOption);
router.put("/:id", updateQuestionOption);
router.delete("/:id", deleteQuestionOption);

export default router;
