import React, { useState } from "react";
import "./User.css";
import { SERVER } from "../../lib/constant";
import axios from "axios";
import { useNavigate } from 'react-router-dom';



export default function LoginFunc() {
  const navigate = useNavigate();

  const [Email, setEmail] = useState("");
  const [PW, setPW] = useState("");

  const LoginFunc = async (e) => {
    e.preventDefault();
    //email 이나 PW가 빈 값이라면
    if (!(Email && PW)) {
      return alert("모든 값을 채워주세요.");
    }
    const user = {
      Email,
      PW
    }

    // axios({
    //   method: "POST",
    //   url: `${SERVER}/user/signin`,
    //   data: user
    // }).then((res) => {
    //   // console.log(res.data.data)
    //   if (res.data.result) {
    //     alert(`${res.data.data}님 환영합니다!`);
    //     navigate(`/`)
    //   } else {
    //     alert("아이디 혹은 비밀번호가 맞지 않습니다.")
    //   }
    // })
  }

  return (
    <>
      <div class="wrapper">
        <form class="form-signin">
          <h1 class="form-signin-heading">login</h1>
          <div class="inputs">
            <div class="input">
              <label class="info">Email: </label>
              <input
                type="text"
                class="form-control"
                name="email"
                placeholder="Email Address"
                required=""
                autofocus=""
                value={Email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <div class="input">
              <label class="info">PW: </label>
              <input
                type="password"
                class="form-control"
                name="password"
                placeholder="Password"
                required=""
                value={PW}
                onChange={(e) => setPW(e.currentTarget.value)}
              />
            </div>
          </div>
          <br />
          <label class="checkbox">
            <input
              type="checkbox"
              value="remember-me"
              id="rememberMe"
              name="rememberMe"
            />{" "}
            Remember me
          </label>
          <button class="btn" type="submit" onClick={LoginFunc}>
            Login
          </button>
        </form>
      </div>
    </>
  );
}
