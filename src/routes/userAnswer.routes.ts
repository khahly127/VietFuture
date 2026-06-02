import express from "express";

import {
    getAllUserAnswers,
    getUserAnswerById,
    createUserAnswer,
    updateUserAnswer,
    deleteUserAnswer
} from "../controllers/userAnswer.controller";

const router = express.Router();

router.get("/", getAllUserAnswers);
router.get("/:id", getUserAnswerById);
router.post("/", createUserAnswer);
router.put("/:id", updateUserAnswer);
router.delete("/:id", deleteUserAnswer);

export default router;
