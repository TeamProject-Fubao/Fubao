const express = require("express");
const router = express.Router();
const controller = require("../controller/mainCtrl");
const shopRouter = require("./shopRouter");
const commuRouter = require("./commuRouter");
const userRouter = require("./userRouter");


router.get("/", controller.getHome);
router.use("/shop", shopRouter);
router.use("/community", commuRouter);
router.use("/user", userRouter);

module.exports = router;
