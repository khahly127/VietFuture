import { prisma } from "../config/prisma";

const getAllSkillReportsService = async () => {
    return await prisma.skillReport.findMany();
};

const getSkillReportByIdService = async (id: number) => {
    return await prisma.skillReport.findUnique({
        where: {
            report_id: id
        }
    });
};

const createSkillReportService = async (data: any) => {
    return await prisma.skillReport.create({
        data
    });
};

const updateSkillReportService = async (id: number, data: any) => {
    return await prisma.skillReport.update({
        where: {
            report_id: id
        },
        data
    });
};

const deleteSkillReportService = async (id: number) => {
    return await prisma.skillReport.delete({
        where: {
            report_id: id
        }
    });
};

export {
    getAllSkillReportsService,
    getSkillReportByIdService,
    createSkillReportService,
    updateSkillReportService,
    deleteSkillReportService
};
