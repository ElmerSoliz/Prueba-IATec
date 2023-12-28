import models from "./../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export default {
    async login(req, res){
        const { email, password } = req.body;

        let user = await models.User.findOne({
            where: {email: email}
        })

        if(!user){
            return res.status(401).json({message: "Incorrect Credentials"});
        }

        let correctPassword = await bcrypt.compare(password, user.password);

        if(correctPassword){
            let payload = {
                id: user.id,
                email: user.email,
                time: new Date()
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: 60*60
            });
            return res.status(200).json({
                acces_token: token,
                user: user,
                error: false
            }) 
        }else {
            return res.status(401).json({message: "Incorrect password"})
        }
    },
    logout(req, res){

    }
}