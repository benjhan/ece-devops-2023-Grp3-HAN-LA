// routes/user.js

const express = require("express");
const userController = require("../controllers/user");

const userRouter = express.Router();

userRouter
  .post("/", (req, res) => {
    userController.create(req.body, (err, result) => {
      const respObj = {
        status: err ? "error" : "success",
        msg: err ? err.message : result,
      };

      res.status(err ? 400 : 201).json(respObj);
    });
  })
  .get("/:username", (req, res) => {
    const username = req.params.username;

    userController.get(username, (err, result) => {
      const respObj = {
        status: err ? "error" : "success",
        msg: err ? err.message : result,
      };

      res.status(err ? 400 : 200).json(respObj);
    });
  })
  .put("/:username", (req, res) => {
    const username = req.params.username;
    const { firstname, lastname } = req.body;

    userController.update(username, { firstname, lastname }, (err, result) => {
      const respObj = {
        status: err ? "error" : "success",
        msg: err ? err.message : `User ${username} updated`,
      };

      res.status(err ? 400 : 200).json(respObj);
    });
  })
  .delete("/:username", (req, res) => {
    const username = req.params.username;

    userController.delete(username, (err, result) => {
      const respObj = {
        status: err ? "error" : "success",
        msg: err ? err.message : `User ${username} deleted`,
      };

      res.status(err ? 400 : 200).json(respObj);
    });
  });

module.exports = userRouter;
