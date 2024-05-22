
const mongoose = require("mongoose")

const Produc = mongoose.model("Produc", new mongoose.Schema({
    title: {
        type: String
    },
    descrip: {
        type: String
    },
    img: {
        type: String
    },
    price: {
        type: String
    },
}))

module.exports = { Produc }
