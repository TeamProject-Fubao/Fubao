import React from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import "./Heading.css";

export default function Heading() {
  const location = useLocation();
  const navigate = useNavigate();

  let headerName;
  switch (location.pathname) {
    case "/":
      headerName = "Home";
      break;
    case "/shop":
      headerName = "Shop";
      break;
    case "/community":
      headerName = "Community";
      break;
    default:
      headerName = "Home";
  }

  const goToElement = (element) => {
    navigate("/", { state: { scrollTo: element } });
  };

  return (
    <div className="inner">
      <div className="header">
        <div className="header_Sub_Category">
          <div className="Logo">
            <img
              className="main-logo"
              src={process.env.PUBLIC_URL + "/goods_image/main-logo.png"}
            />
          </div>
          <div
            className="header_name"
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
          >
            "{headerName}"
          </div>
          {/* <div className="login">
            <RouterLink
              to={"/signup"}
              style={{ color: "white", textDecoration: "none" }}
            >
              회원가입{" "}
            </RouterLink>
            <RouterLink
              to={"/login"}
              style={{ color: "white", textDecoration: "none" }}
            >
              로그인
            </RouterLink>
          </div> */}
        </div>
        <div className="header_Sub">
          <button
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
            onClick={() => goToElement("today_ranking")}
            className="link"
          >
            HOME
          </button>
          <button
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
            onClick={() => goToElement("introduce")}
            className="link"
          >
            ABOUT
          </button>

          <button
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
            onClick={() => goToElement("location_map")}
            className="link"
          >
            CONTACT
          </button>
          <RouterLink
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
            to="/shop"
            className="link"
          >
            SHOP
          </RouterLink>
          <RouterLink
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
            to="/community"
            className="link"
          >
            COMMUNITY
          </RouterLink>
          <div
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
          >
            |
          </div>
          <RouterLink
            style={{
              color: "white",
              background: "black",
              textDecoration: "none",
            }}
            to="/cart"
            className="link"
          >
            CART
          </RouterLink>
          <RouterLink
            to={"/signup"}
            style={{ color: "white", textDecoration: "none" }}
          >
            {" "}
            Join us{" "}
          </RouterLink>
          <RouterLink
            to={"/login"}
            style={{ color: "white", textDecoration: "none", marginLeft: "1%" }}
          >
            Log in
          </RouterLink>
        </div>
      </div>
    </div>
  );
}
