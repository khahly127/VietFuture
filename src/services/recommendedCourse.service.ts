import { prisma } from "../config/prisma";

const getAllRecommendedCoursesService = async () => {
    return await prisma.recommendedCourse.findMany();
};

const getRecommendedCourseByIdService = async (id: number) => {
    return await prisma.recommendedCourse.findUnique({
        where: {
            recommendation_id: id
        }
    });
};

const createRecommendedCourseService = async (data: any) => {
    return await prisma.recommendedCourse.create({
        data
    });
};

const updateRecommendedCourseService = async (id: number, data: any) => {
    return await prisma.recommendedCourse.update({
        where: {
            recommendation_id: id
        },
        data
    });
};

const deleteRecommendedCourseService = async (id: number) => {
    return await prisma.recommendedCourse.delete({
        where: {
            recommendation_id: id
        }
    });
};

export {
    getAllRecommendedCoursesService,
    getRecommendedCourseByIdService,
    createRecommendedCourseService,
    updateRecommendedCourseService,
    deleteRecommendedCourseService
};
