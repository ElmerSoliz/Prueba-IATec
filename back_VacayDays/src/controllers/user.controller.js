import models from "./../models/index";
import bcrypt from "bcrypt";

export default {
    async GetAll(req, res){
        try {
            const users = await models.User.findAll({
                attributes: ['id','username', 'email']
            });
            return res.status(200).json(users);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    },

    async Create(req, res){
        try {
            let data = req.body;
            data.password = await bcrypt.hash(data.password, 12);

            const user = await models.User.create(data);

            if(user.id){
                return res.status(201).json({message: "registered user"});
            }
            return res.status(200).json(user);
        } catch (error) {
            return res.status(422).json(error.message);
        }
    },

    async GetById(req, res){
        const id = req.params.id;
        const user = await models.User.findByPk(id);
        if(user === null){
            return res.status(404).json({message: "user not found"});
        }
        return res.status(200).json(user);
    },

    async Update(req, res){
        const id = req.params.id;
        const data = req.body;

        const user = await models.User.findByPk(id);
        if(user){
            await models.User.update(data, {
                where:{
                    id:user.id
                }
            })
            return res.status(200).json({message:"modified user"})
        }
        return res.status(404).json({message: "user not found"});
    },

    async Delete(req, res){
        try {
            const id = req.params.id;
            const user = await models.User.findByPk(id);

            if(user){
                await models.User.destroy({
                    where: {
                        id: user.id
                    }
                });
                return res.status(200).json({message:"Eliminated user"});
            }
            return res.status(404).json({message:"User not found"});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}