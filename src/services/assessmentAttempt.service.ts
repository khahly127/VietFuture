import { prisma } from "../config/prisma";

const getAllAssessmentAttemptsService = async () => {
    return await prisma.assessmentAttempt.findMany();
};

const getAssessmentAttemptByIdService = async (id: number) => {
    return await prisma.assessmentAttempt.findUnique({
        where: {
            attempt_id: id
        }
    });
};

const createAssessmentAttemptService = async (data: any) => {
    return await prisma.assessmentAttempt.create({
        data
    });
};

const updateAssessmentAttemptService = async (id: number, data: any) => {
    return await prisma.assessmentAttempt.update({
        where: {
            attempt_id: id
        },
        data
    });
};

const deleteAssessmentAttemptService = async (id: number) => {
    return await prisma.assessmentAttempt.delete({
        where: {
            attempt_id: id
        }
    });
};

export {
    getAllAssessmentAttemptsService,
    getAssessmentAttemptByIdService,
    createAssessmentAttemptService,
    updateAssessmentAttemptService,
    deleteAssessmentAttemptService
};
