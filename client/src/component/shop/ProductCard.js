import Card from "./Card";
import React, { useState } from "react";

function ProductCard(props) {
  const [showCards, setShowCards] = useState(false);
  const [showMoreButton, setShowMoreButton] = useState(true);
  const [showGoodsBox, setShowGoodsBox] = useState(true);


  const handleClick = () => {
    setShowCards(!showCards);
    setShowGoodsBox(false);

  };

  // let codeExecuted = false;
  // let showCards = false;

  // const handleClick = () => {
  //   if (!codeExecuted) {
  //     codeExecuted = true;
  //     showCards = true;
  //   }
  // };

  // const handleClick = () => {
  //   if (!handleClickExecuted) {
  //     showCards = true;
  //     handleClickExecuted = true;
  //     console.log("하이");
  //   }
  // };
  return (
    <>
      <div className="goods-box">
        <div className="goods-line">🐼금주의 핫템🐼</div>
      </div>
      <div className="goods-box-img">
        <div className="row">
          {props.goods.slice(0, 8).map((a, i) => {
            return <Card goods={a} i={i + 1} key={i} />;
          })}
        </div>
      </div>

      <div className="goods-box-img">
        {showCards && (
          <div className="row">
            {props.goods.slice(8, 15).map((a, i) => {
              return <Card goods={a} i={i + 1} key={i} />;
            })}
          </div>
        )}
      </div>

      {showGoodsBox && (
  <div className="goods-box">
    <div className="more-btn" onClick={handleClick}>
      More
    </div>
  </div>
)}


      {/* <div className="goods-box">
        <div className="more-btn" onClick={handleClick}>
          More
        </div>
      </div> */}
    </>
  );
}
export default ProductCard;
