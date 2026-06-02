import express from "express";

import {
    getAllSkillReports,
    getSkillReportById,
    createSkillReport,
    updateSkillReport,
    deleteSkillReport
} from "../controllers/skillReport.controller";

const router = express.Router();

router.get("/", getAllSkillReports);
router.get("/:id", getSkillReportById);
router.post("/", createSkillReport);
router.put("/:id", updateSkillReport);
router.delete("/:id", deleteSkillReport);

export default router;
