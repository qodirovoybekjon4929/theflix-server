// imports
const database = require('../../../db/database')
const toPagination = require('to-pagination')

const GetUsers = async (req, res) => {
    try {
        const { page_number } = req.query

        if (page_number) {
            const users = await database.query("SELECT * FROM users")
            if (users.rows.length > 0) {
                const users_with_pagination = await toPagination(users.rows, page_number, 15)

                res.status(200).send(users_with_pagination)
            } else {
                const users_with_pagination = await toPagination([1], page_number, 15)
                users_with_pagination.data = []
            res.status(200).send(users_with_pagination)
            }
        } else {
            res.status(400).send({
                message: "You don't send page_number in params!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = GetUsers