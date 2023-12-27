const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter
  .post("/", async (req, res) => {
    try {
      const result = await userController.create(req.body);
      res.status(201).json({ status: "success", msg: result });
    } catch (err) {
      res.status(400).json({ status: "error", msg: err.message });
    }
  })
  .get("/:username", async (req, res) => {
    try {
      const result = await userController.get(req.params.username);
      res.status(200).json({ status: "success", msg: result });
    } catch (err) {
      res.status(400).json({ status: "error", msg: err.message });
    }
  })
  .put("/:username", async (req, res) => {
    try {
      const { firstname, lastname } = req.body;
      await userController.update(req.params.username, { firstname, lastname });
      res.status(200).json({ status: "success", msg: `User ${req.params.username} updated` });
    } catch (err) {
      res.status(400).json({ status: "error", msg: err.message });
    }
  })
  .delete("/:username", async (req, res) => {
    try {
      await userController.delete(req.params.username);
      res.status(200).json({ status: "success", msg: `User ${req.params.username} deleted` });
    } catch (err) {
      res.status(400).json({ status: "error", msg: err.message });
    }
  });

module.exports = userRouter;
