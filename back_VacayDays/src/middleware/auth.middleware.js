import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        let token = '';
        if (req.headers.authorization) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({ message: "Security token was not provided" });
        }

        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                if (error.name === 'TokenExpiredError') {
                    return res.status(401).json({ auth: false, message: "Token has expired" });
                } else {
                    return res.status(401).json({ auth: false, message: "Invalid token" });
                }
            }

            req.user = decoded;  // Agrega el objeto decodificado a la solicitud para su uso posterior
            next();
        });
    } catch (error) {
        console.error("Error in auth middleware:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default authMiddleware;