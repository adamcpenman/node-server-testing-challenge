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

router.delete('/:id', (req, res) => {
  const { id } = req.params

  ReRo.remove(id)
    .then(deleted => {
      if(deleted) {
        res.json({ removed: deleted })
      } else {
        res.status(404).json({ message: "could not find users"})
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete"})
    })
})

router.put("/:id", async (req, res, next) => {
  try {
    const resource = await ReRo.update(req.params.id, req.body)
      res.status(200).json(resource)
  } catch (err) {
      next(err)
  }
})

module.exports = router;