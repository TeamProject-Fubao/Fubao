import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./CartPage.css";
import { addCount, downCount, deleteGoods } from "../cartstore";
export default function CartPage() {
  let state = useSelector((state) => state);
  console.log(state.cart[0].name);
  let dispatch = useDispatch();
  console.log(state.cart.length);

  return (
    <>
      <div className="cart-logo">장바구니</div>
      <div className="table-box-main">
        <div className="table-box1">
          <div>#</div>
          <div>상품명</div>
          <div>수량</div>
          <div>변경하기</div>
          <div>삭제하기</div>
        </div>

        {state.cart.length === 1 ? (
          <img
            className="card-img"
            src={process.env.PUBLIC_URL + "goods_image/tung.png"}
            width="40%"
          />
        ) : (
          //<div className="empty-cart">텅~</div>
          state.cart.map((a, i) =>
            state.cart[i].id !== 0 ? (
              <div className="table-box2" key={i}>
                <img
                  className="cart-img-box"
                  src={
                    process.env.PUBLIC_URL +
                    "/goods_image/" +
                    state.cart[i].id +
                    ".jpg"
                  }
                  width="20%"
                />
                {/* <div>{state.cart[i].id}</div> */}
                <div>{state.cart[i].name}</div>
                <div>{state.cart[i].count}</div>
                <div>
                  <button
                    className="decrease-btn"
                    onClick={() => {
                      dispatch(downCount(state.cart[i].id));
                    }}
                  >
                    -
                  </button>
                  <button
                    className="increase-btn"
                    onClick={() => {
                      dispatch(addCount(state.cart[i].id));
                    }}
                  >
                    +
                  </button>
                </div>
                <div className="table-box2">
                  <button
                    className="delete-btn"
                    onClick={() => {
                      dispatch(deleteGoods(state.cart[i].id));
                    }}
                  >
                    X
                  </button>
                </div>
              </div>
            ) : null
          )
        )}
        {/* {state.cart.map((a, i) => (
          <div className="table-box2" key={i}>
            <img
        className="cart-img-box"
        src={process.env.PUBLIC_URL + "/goods_image/" + state.cart[i].id + ".jpg"}
        width="20%"
      />
            <div>{state.cart[i].id}</div>
            <div>{state.cart[i].name}</div>
            <div>{state.cart[i].count}</div>
            <div>
              <button
                className="decrease-btn"
                onClick={() => {
                  dispatch(downCount(state.cart[i].id));
                }}
              >
                -
              </button>
              <button
                className="increase-btn"
                onClick={() => {
                  dispatch(addCount(state.cart[i].id));
                }}
              >
                +
              </button>             
            </div>
            <div className="table-box2"><button className="delete-btn" onClick={()=>{
              dispatch(deleteGoods(state.cart[i].id))
            }}>X</button></div>

          </div>
        ))}  */}
      </div>
    </>
  );
}
