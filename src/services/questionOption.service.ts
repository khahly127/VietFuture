import { prisma } from "../config/prisma";

const getAllQuestionOptionsService = async () => {
    return await prisma.questionOption.findMany();
};

const getQuestionOptionByIdService = async (id: number) => {
    return await prisma.questionOption.findUnique({
        where: {
            option_id: id
        }
    });
};

const createQuestionOptionService = async (data: any) => {
    return await prisma.questionOption.create({
        data
    });
};

const updateQuestionOptionService = async (id: number, data: any) => {
    return await prisma.questionOption.update({
        where: {
            option_id: id
        },
        data
    });
};

const deleteQuestionOptionService = async (id: number) => {
    return await prisma.questionOption.delete({
        where: {
            option_id: id
        }
    });
};

export {
    getAllQuestionOptionsService,
    getQuestionOptionByIdService,
    createQuestionOptionService,
    updateQuestionOptionService,
    deleteQuestionOptionService
};
