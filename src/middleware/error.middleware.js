import { Prisma } from "@prisma/client";

const errorHandler = (err, req, res, next) => {

    if (err instanceof Prisma.PrismaClientKnownRequestError) {

        if (err.code === "P2002") {
            return res.status(409).json({
                success: false,
                message: "Email is already subscribed.",
            });
        }

    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });

};

export default errorHandler;