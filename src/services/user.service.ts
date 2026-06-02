import { prisma } from "../config/prisma";
import { hashPassword } from "../utils/hash";

const safeUserSelect = {
    user_id: true,
    full_name: true,
    email: true,
    phone: true,
    role: true,
    status: true,
    created_at: true,
    updated_at: true
};

const getAllUsersService = async () => {
    return await prisma.user.findMany({
        select: safeUserSelect
    });
};

const getUserByIdService = async (id: number) => {
    return await prisma.user.findUnique({
        where: {
            user_id: id
        },
        select: safeUserSelect
    });
};

const createUserService = async (
    data: any
) => {

    const hashedPassword =
        await hashPassword(
            data.password
        );

    return await prisma.user.create({

        data: {

            full_name:
                data.full_name,

            email:
                data.email,

            password_hash:
                hashedPassword,

            phone:
                data.phone,

            role:
                data.role,

            status:
                data.status
        },
        select: safeUserSelect
    });
};

const updateUserService = async (
    id: number,
    data: any
) => {
    return await prisma.user.update({
        where: {
            user_id: id
        },
        data,
        select: safeUserSelect
    });
};

const deleteUserService = async (id: number) => {
    return await prisma.user.delete({
        where: {
            user_id: id
        }
    });
};
export { getAllUsersService, getUserByIdService, createUserService, updateUserService, deleteUserService }
