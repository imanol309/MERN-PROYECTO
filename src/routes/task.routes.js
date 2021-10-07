const express = require("express");
const router = express.Router();
const Task = require("../models/task");


router.get("/", async (req, res) => {
  const task = await Task.find();
  res.json(task);
});

router.get("/:id", async (req, res) => {
  const unaTask = await Task.findById(req.params.id)
  res.json(unaTask);
})

router.post("/", async (req, res) => {
  const { title, description } = req.body
  const task1 = new Task({title, description})
  await task1.save();
  res.json({status: "Dato creado"})
})

router.put("/:id", async (req, res) => {
  const { title, description } = req.body
  const newTask = { title, description }
  await Task.findByIdAndUpdate(req.params.id, newTask)
  res.json({status: "Dato actualizando"})
})

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndRemove(req.params.id)
  res.json({status: "Dato Eliminado"})
})

module.exports = {
  router,
};
