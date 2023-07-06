const express = require("express");
const router = express.Router();
const controller = require("../controller/userCtrl");

//경로: /user
router.get("/signup", controller.getSignup); // 회원가입 페이지 조회
router.get("/signin", controller.getLogin); // 로그인 페이지 조회
router.get("/cart", controller.getCart); // 장바구니 목록 조회

router.post("/signup", controller.postSignup); // 회원가입 post
router.post("/signin", controller.postLogin); // 로그인 post

module.exports = router;
