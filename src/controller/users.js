const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;

    try {
        await UsersModel.createNewUser(body);
        res.json({
            messsage: 'CREATE new user success',
            data: body
        })
    } catch (error) {
        res.status(500).json({
        message: 'Server Error',
        serverMessage: error,
        })       
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
    })
}
    console.log('idUser: ', idUser);
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message: "DELETE user success",
        data: {
            id: idUser,
            name: "Mutia",
            email: "mutia@gmail.com",
            address: "Bente"
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}