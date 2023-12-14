import models from "./../models"

export default {
    async GetAll(req, res){

        try {
            const data = await models.VacationRequest.findAll({
                include: [
                    {
                        model: models.User,
                        attributes: ['id', 'username', 'email', 'holidays'],
                        as: 'user'
                    }
                ]
            });
            return res.status(200).json(data);
            
        } catch (error) {
            return res.status(500).json(error.message);
        }

    },

    async Create(req, res) {
        try {
            let data = req.body;
    
            const vacationRequest = await models.VacationRequest.create(data);
    
            if (vacationRequest.id) {
                return res.status(201).json({ message: "The vacation request was created" });
            }
            return res.status(200).json(vacationRequest);
        } catch (error) {
            return res.status(422).json(error.message);
        }
    },

    async GetById(req, res){
        const id = req.params.id;
        const vacationRequest = await models.VacationRequest.findByPk(id);
        if(vacationRequest === null){
            return res.status(404).json({message: "Vacation request not found"});
        }
        return res.status(200).json(vacationRequest);
    },

    async GetByUserId(req, res) {
        const userId = req.params.userId;
        console.log(userId);
    
        try {
            const vacationRequests = await models.VacationRequest.findAll({
                where: {
                    userId: userId,
                },
            });
    
            return res.status(200).json({
                success: true,
                message: 'Solicitud de vacaciones obtenida correctamente',
                data: vacationRequests,
            });
        } catch (error) {
            console.error('Error al obtener las solicitudes de vacaciones:', error);
            return res.status(500).json({
                success: false,
                message: 'Error interno del servidor al obtener las solicitudes de vacaciones',
            });
        }
    },

    async Update(req, res){
        const id = req.params.id;
        const data = req.body;

        const vacationRequest = await models.VacationRequest.findByPk(id);
        if(vacationRequest){
            await models.VacationRequest.update(data, {
                where:{
                    id:vacationRequest.id
                }
            })
            return res.status(200).json({message:"modified vacation request"})
        }
        return res.status(404).json({message: "Vacation request not found"});
    },
    
    async Delete(req, res){
        try {
            const id = req.params.id;
            const vacationRequest = await models.VacationRequest.findByPk(id);

            if(vacationRequest){
                await models.VacationRequest.destroy({
                    where: {
                        id: vacationRequest.id
                    }
                });
                return res.status(200).json({message:"Eliminated vacation request"});
            }
            return res.status(404).json({message:"Vacation request not found"});
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}