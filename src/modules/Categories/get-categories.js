// imports
const database = require('../../../db/database')
const toPagination = require('to-pagination')

const GetCategories = async (req, res) => {
    try {
        const { page_number } = req.query
        if (page_number) {
            const categories = await database.query('SELECT * FROM categories')
            const categories_with_pagination = await toPagination(categories.rows, page_number, 10)

            res.status(200).send(categories_with_pagination)
        } else {
            res.status(400).send({
                message: "You don't have page number!"
            })
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = GetCategories