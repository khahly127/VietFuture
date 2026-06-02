import { prisma } from "../config/prisma";

const getAllAssessmentsService = async () => {
    return await prisma.assessment.findMany();
};

const getAssessmentByIdService = async (id: number) => {
    return await prisma.assessment.findUnique({
        where: {
            assessment_id: id
        }
    });
};

const createAssessmentService = async (data: any) => {
    return await prisma.assessment.create({
        data
    });
};

const updateAssessmentService = async (id: number, data: any) => {
    return await prisma.assessment.update({
        where: {
            assessment_id: id
        },
        data
    });
};

const deleteAssessmentService = async (id: number) => {
    return await prisma.assessment.delete({
        where: {
            assessment_id: id
        }
    });
};

export {
    getAllAssessmentsService,
    getAssessmentByIdService,
    createAssessmentService,
    updateAssessmentService,
    deleteAssessmentService
};
