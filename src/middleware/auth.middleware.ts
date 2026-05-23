import {

    Request,
    Response,
    NextFunction

} from "express";

import jwt from "jsonwebtoken";

type JwtPayload = {

    user_id: number;
    email: string;
    role: string;

    [key: string]: any;
};

export const verifyToken = (

    req: Request,
    res: Response,
    next: NextFunction

) => {

    try {

        const authHeader =
            req.headers.authorization;

        // no token
        if (!authHeader) {

            return res.status(401).json({

                message:
                    "No token provided"
            });
        }

        // wrong format
        if (
            !authHeader.startsWith(
                "Bearer "
            )
        ) {

            return res.status(401).json({

                message:
                    "Invalid token format"
            });
        }

        const token =
            authHeader.split(" ")[1];

        // verify token
        const decoded =
            jwt.verify(

                token,
                process.env.JWT_SECRET!

            ) as JwtPayload;

        // attach user
        (req as any).user =
            decoded;

        next();

    } catch (error) {

        return res.status(401).json({

            message:
                "Invalid or expired token"
        });
    }
};

export const authorizeRoles = (
    ...roles: string[]
) => {

    return (

        req: Request,
        res: Response,
        next: NextFunction

    ) => {

        const user = (req as any).user as JwtPayload;

        // chưa login
        if (!user) {

            return res.status(401).json({

                message:
                    "Unauthorized"
            });
        }

        // không đủ quyền
        if (
            !roles.includes(
                user.role
            )
        ) {

            return res.status(403).json({

                message:
                    "Forbidden"
            });
        }

        next();
    };
};

// shortcut
export const authorizeAdmin =
    authorizeRoles("admin");