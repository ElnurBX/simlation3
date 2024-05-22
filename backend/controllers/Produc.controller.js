
const { Produc } = require("../models/Produc.model")

const ProducController = {
    getAll: async (req, res) => {
        try {
            const items = await Produc.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const item = await Produc.findById(id)
            res.send(item)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    add: async (req, res) => {
        try {
            const newProduc = new Produc({ ...req.body })
            await newProduc.save()
            const items = await Produc.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Produc.findByIdAndDelete(id)
            const items = await Produc.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params
            await Produc.findByIdAndUpdate(id, { ...req.body })
            const items = await Produc.find()
            res.send(items)
        } catch (error) {
            res.status(404).send(error)
        }
    }
}
module.exports = { ProducController }
