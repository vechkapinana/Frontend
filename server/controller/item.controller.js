const db = require('../db')

class ItemController {
	async createItem(req, res) {
		const { id, name, description } = req.body
		let item
		if (id) {
			item = await db.query(`UPDATE item set name = ${name}, description = ${description} where id = ${id} RETURNING *`)
		} else {
			item = await db.query('INSERT INTO item (name, description) values ($1, $2) RETURNING *', [name, description])
		}
		res.json(item.rows[0])
	}
	async getItems(req, res) {
		const items = await db.query('SELECT * FROM item ORDER BY id')
		res.json(items.rows)
	}
	async getOneItem(req, res) {
		const id = req.params.id
		const item = await db.query(`SELECT * FROM item WHERE id = ${id}`)
		res.json(item.rows[0])
	}
	async deleteItem(req, res) {
		const id = req.params.id
		const item = await db.query(`DELETE FROM item WHERE id = ${id}`)
		res.json({ success: true })
	}
}

module.exports = new ItemController()