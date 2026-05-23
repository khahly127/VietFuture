import { prisma } from "../config/prisma";
import { hashPassword, comparePassword } from "../utils/hash";
import { generateToken } from "../utils/jwt";

const getUserByEmail = async (
    email: string
) => {

    return await prisma.user.findUnique({

        where: {
            email
        }
    });
};

export const registerService = async (
    data: any
) => {

    const existing =
        await getUserByEmail(
            data.email
        );

    if (existing) {

        throw new Error(
            "Email already exists"
        );
    }

    // hash password
    const password_hash =
        await hashPassword(
            data.password
        );

    // create user
    const user =
        await prisma.user.create({

            data: {

                full_name:
                    data.full_name,

                email:
                    data.email,

                phone:
                    data.phone,

                password_hash
            }
        });

    // generate jwt
    const token = generateToken({

        user_id:
            user.user_id,

        email:
            user.email,

        role:
            user.role
    });

    // remove password hash
    const {
        password_hash: _,
        ...safeUser

    } = user;

    return {

        user: safeUser,
        token
    };
};

export const loginService = async (

    email: string,
    password: string

) => {

    const user =
        await getUserByEmail(
            email
        );

    if (!user) {

        throw new Error(
            "Invalid credentials"
        );
    }

    // compare password
    const isValid =
        await comparePassword(

            password,
            user.password_hash
        );

    if (!isValid) {

        throw new Error(
            "Invalid credentials"
        );
    }

    // generate token
    const token =
        generateToken({

            user_id:
                user.user_id,

            email:
                user.email,

            role:
                user.role
        });

    // remove password hash
    const {
        password_hash: _,
        ...safeUser

    } = user;

    return {

        user: safeUser,
        token
    };
};