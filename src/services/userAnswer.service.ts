import { prisma } from "../config/prisma";

const getAllUserAnswersService = async () => {
    return await prisma.userAnswer.findMany();
};

const getUserAnswerByIdService = async (id: number) => {
    return await prisma.userAnswer.findUnique({
        where: {
            answer_id: id
        }
    });
};

const createUserAnswerService = async (data: any) => {
    return await prisma.userAnswer.create({
        data
    });
};

const updateUserAnswerService = async (id: number, data: any) => {
    return await prisma.userAnswer.update({
        where: {
            answer_id: id
        },
        data
    });
};

const deleteUserAnswerService = async (id: number) => {
    return await prisma.userAnswer.delete({
        where: {
            answer_id: id
        }
    });
};

export {
    getAllUserAnswersService,
    getUserAnswerByIdService,
    createUserAnswerService,
    updateUserAnswerService,
    deleteUserAnswerService
};
