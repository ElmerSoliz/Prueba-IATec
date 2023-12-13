import models from "./../models"

export default {
    async GetAll(req, res){

        try {
            const data = await models.VacationRequest.findAll();
            return res.status(200).json(data);
            
        } catch (error) {
            return res.status(500).json(error.message);
        }

    },

    async Create(req, res) {
        try {
            let data = req.body;
            const startDate = new Date(data.startDate);
            const endDate = new Date(data.endDate);
            const holidays = [
                new Date('2023-12-25'),
            ];
    
            let totalDays = calcularDiasHabiles(startDate, endDate, holidays);
    
            data.totalDays = totalDays;
    
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

function calcularDiasHabiles(startDate, endDate, holidays) {
    const differenceInMs = endDate - startDate;
    let totalDays = differenceInMs / (1000 * 60 * 60 * 24);

    for (let i = 0; i <= totalDays; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);

        if (currentDate.getDay() === 0 || isHoliday(currentDate, holidays)) {
            totalDays--;
        }
    }

    return totalDays;
}

function isHoliday(day, holidays) {
    const formattedDay = new Date(day.toISOString().split('T')[0]);

    return holidays.some(holiday => {
        return formattedDay.getTime() === holiday.getTime();
    });
}