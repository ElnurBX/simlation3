
const express = require("express")
const { ProducController } = require("../controllers/Produc.controller")
const router = express.Router()

router.get("/", ProducController.getAll)
router.get("/:id", ProducController.getById)
router.post("/", ProducController.add)
router.delete("/:id", ProducController.delete)
router.put("/:id", ProducController.edit)

module.exports = router 
