import { prisma } from "../config/prisma";

const getAllQuestionsService = async () => {
    return await prisma.question.findMany();
};

const getQuestionByIdService = async (id: number) => {
    return await prisma.question.findUnique({
        where: {
            question_id: id
        }
    });
};

const createQuestionService = async (data: any) => {
    return await prisma.question.create({
        data
    });
};

const updateQuestionService = async (id: number, data: any) => {
    return await prisma.question.update({
        where: {
            question_id: id
        },
        data
    });
};

const deleteQuestionService = async (id: number) => {
    return await prisma.question.delete({
        where: {
            question_id: id
        }
    });
};

export {
    getAllQuestionsService,
    getQuestionByIdService,
    createQuestionService,
    updateQuestionService,
    deleteQuestionService
};
