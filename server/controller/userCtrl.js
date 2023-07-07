const model = require("../models");
const { Op } = require("sequelize");
const { User } = require("../models");
const jwt = require("jsonwebtoken");
const fs = require("fs");
// const privateKey = fs.readFileSync("private.key");
const secretKey = require("../config/jwt");
const bcrypt = require("bcrypt");

// 회원가입 페이지 조회
exports.getSignup = async (req, res) => {
  try {
    const singup = await User.findAll();
    res.send({ result: true, data: singup });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 로그인 페이지 조회
exports.getLogin = async (req, res) => {
  try {
    const login = await User.findAll({
      attribute: [email, password],
    });
    res.send({ result: true, data: login });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 장바구니 목록 조회
exports.getCart = async (req, res) => {
  try {
    const cart = await User.findAll();
    res.send({ result: true, data: cart });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 회원가입 post
exports.postSignup = async (req, res) => {
  const { id, password, username, nickname, email } = req.body;
  const saltRounds = 10;
  const hashedPw = await bcrypt.hash(password, saltRounds);
  console.log(hashedPw);
  try {
    const postsignup = await User.create({
      password: hashedPw,
      username,
      nickname,
      email,
    });
    res.send({ result: true, data: postsignup });
  } catch (error) {
    res.send({ result: false, data: error });
  }
};
// 로그인 post
exports.postLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  console.log(user);
  const check = await bcrypt.compare(password, user.password);
  console.log(check);

  // JWT 생성
  //jwt.sign(payload, secretOrPrivateKey, [options, callback])
  if (check) {
    const token = jwt.sign({ id: user.id }, secretKey);
    res.send({
      id: user.id,
      token,
      algorithm: "RS256",
      expiresIn: "10000h",
    });
    // jwt 인증(검증목적 토큰 디코딩)
    const verified = jwt.verify(token, secretKey);
    console.log(verified);
  } else {
    res.send({ result: false, data: "404" });
  }
  //<클라이언트 코드>
  // 사용이 필요한 api - 로그인, 커뮤니티, 카트
  // 로그인(포함?)이후 발생하는 모든 요청 헤더에 토큰값을 담아서 요청(대부분의 API는 토큰 정보를 요구)
  // 웹소켓
  // 로그아웃


};
