import { useNavigate } from "react-router-dom";

function Card(props) {
    const navigate = useNavigate();
  const moveDetail = () => {
    console.log(props.goods.id);
    navigate("/shop/detail/" + props.goods.id);
  };

  return (
    <>
      <div className="container" onClick={moveDetail}>
        <div className="col-md-4 line">
          <img className="card-img"
            src={
              process.env.PUBLIC_URL + "goods_image/" + props.goods.id + ".jpg"
            }
            width="100%"
          />
          <h4>{props.goods.product_title}</h4>
          <p>feat. {props.goods.content}</p>
          <p>{props.goods.price} 원</p>
        </div>
      </div>
    </>
  );
}

export default Card;