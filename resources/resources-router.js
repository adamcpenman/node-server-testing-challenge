const express = require("express")
const ReRo = require("./resources-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const resources = await ReRo.list()
    res.status(200).json(resources)
  } catch (err) {
    next(err)
  }
})


router.post("/", async (req, res, next) => {
  try {
    const resource = await ReRo.insert(req.body)
    res.status(201).json(resource)
  } catch (err) {
    next(err)
  }
})

module.exports = router;