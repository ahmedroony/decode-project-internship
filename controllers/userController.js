const {
    PrismaClient
} = require('@prisma/client');
const prismaClient = new PrismaClient();
const getUsers = (req, res) => {
    //findmany is used to get all the users from the database
    //we don't need to make new promise  cause prisma handles it !
    prismaClient.user.findMany().then((users) => {
            res.json({
                message: 'Users retrieved successfully',
                data: users,
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
}
const createUser = (req, res) => {
    const {
        name,
        email,
        age,
        is_active
    } = req.body;
    prismaClient.user.create({
            data: {
                //Object Property Shorthand
                name,
                email,
                age: Number(age),
                is_active,
            }
        })
        .then((user) => {
            res.json({
                message: 'User created successfully',
                data: user,
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
}
const editUser = (req, res) => {
    const {
        id
    } = req.params;
    const {
        name,
        email,
        age,
        is_active
    } = req.body;
    prismaClient.user.update({
            where: {
                id: Number(id)
            },
            data: {
                name,
                email,
                age: Number(age),
                is_active,
            }
        })
        .then((user) => {
            res.json({
                message: 'User updated successfully',
                data: user,
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
}
const deleteUser = (req, res) => {
    const {
        id
    } = req.params;
    prismaClient.user.delete({
            where: {
                id: Number(id)
            },
        })
        .then(() => {
            res.json({
                message: 'User deleted successfully',
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err.message
            });
        })
}
module.exports = {
    getUsers,
    createUser,
    editUser,
    deleteUser,
};