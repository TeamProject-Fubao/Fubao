import React from "react";
import styled from "styled-components";
import PubaoInfo from "./PubaoInfo";

const AboutContainer = styled.div`
  height: 800px;
  width: 100%;
  margin: 0 auto;
  /* background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
    url("/images/fuobao.jpeg"); */
  background-color: #ff7e30;
  background-size: cover;
  /* color: white; */
  /* display: flex; */
`;

export default function About() {
  const handleClick = () => {
    window.open("https://namu.wiki/w/%ED%91%B8%EB%B0%94%EC%98%A4", "_blank");
  };
  return (
    <>
      <AboutContainer>
        <div className="yellow-title">PUBAO STORY !</div>
        <div className="yellow-main-box">
          <div className="inner-img">
            <img
              src={process.env.PUBLIC_URL + "goods_image/yellow-pubao.jpg"}
              width="100%"
            />
          </div>
          <div className="inner-text">
            <div className="inner-text2">
              <div className="inner-title">Pubao, makes your life happier</div>
              2014년 중국 주석 시진핑의 방한 이후 에버랜드로 들여온 러바오와
              아이바오의 새끼로, 2020년 7월 20일에 대한민국 최초로 자연 분만으로
              태어난 판다이다. 현재 에버랜드에서 사육 중인 동물들 중 호랑이
              남매들(태범, 무궁, 호랑이 오둥이)과 함께 가장 인기가 높은
              동물이다. 이름의 뜻은 '행복을 주는 보물'이라는 뜻이다.
              <div className="inner-btn" target="_blank" onClick={handleClick}>
                더보기
              </div>
              <div>
                <PubaoInfo></PubaoInfo>
              </div>
            </div>
          </div>
          {/* <div>푸바오 (福宝)</div>
                <div>2020. 07. 20 한국 에버랜드 출생. 한국에서 태어난 첫 번째 판다 타이틀 보유.</div>
                <div>성별 : 여(암컷)</div>
                <div>부모 : 아이바오(엄마), 러바오(아빠)</div>
                <div>몸무게 : 50kg 이상</div>
                <div>사육사 : 강철원 사육사</div> */}
        </div>
      </AboutContainer>
    </>
  );
}
