const Tasks = require("../models/TaskModel");

getAll = async (req, res) => {
    try {
        const data = await Tasks.find().exec();

        res.status(200).json({
            data,
            message: 'Tasks listed'
        });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
};

getId = async (req, res) => {
    try {
        const { id } = req.params;

        const data = await Tasks.findById(id).exec();
        res.status(200).json({
            data,
            message: 'Tasks listed'
        });

    } catch (error) {
        res.status(500).json({
            message: error
        });
    }
};

create = async (req, res) => {
    try {

        const data = new Tasks(req.body);

        const saved = await data.save();

        res.status(201).json({
            data: saved,
            message: "Create task sucessful"
        });

    } catch (error) {
        console.log(error);
    }
}

update = async (req, res) => {
    try {
        const { id } = req.params;
        const { active, name, comment } = req.body;

        const update = await Tasks.findOneAndUpdate({_id: id}, {active, name, comment}, { new: true });

        res.status(200).json({
            data: update,
            message: "Updated..."
        })


    } catch (error) {
        console.log(error);
    }
}

deleted = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await Tasks.deleteOne({_id: id});

        if(response.deletedCount > 0){
            res.status(200).json({
                data: response.deletedCount,
                message: "Delete tasks",
            });
        } else {
            res.status(404).json({
                data: response.deletedCount,
                message: "Not Delete tasks",
            });
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAll,
    getId,
    create,
    update,
    deleted
}