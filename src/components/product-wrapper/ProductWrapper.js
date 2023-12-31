import React from "react";
import "./ProductWrapper.css";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiFillHeart
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToHeart, removeFromHeart } from "../../context/heart";
import { useSelector } from "react-redux";
function ProductWrapper({ data }) {
  const dispatch = useDispatch();
const heart =useSelector(s => s.heart.value)
  return (
    <div className="products">
      {data?.map((item) => (
        <div key={item.id} className="card">
          <Link to={`/product/${item.id}`} state={item} className="card__image">
            <img src={item.url} alt="" />
          </Link>
          <button className="card__heart">
     {
      heart.some(i=> i.id === item.id) ?
      <AiFillHeart onClick={ ()=> dispatch(removeFromHeart(item))}/>:
      <AiOutlineHeart onClick={() => dispatch(addToHeart(item))} />
     }
            
          </button>
          <div className="card__body">
            <p className="card__title">{item.title}</p>
            <p className="card__rating">
              <AiFillStar />
              <span>5.0 (585 baho)</span>
            </p>
            <div className="card__monthly">
              <span>{Math.round((item.price * 1.44) / 12)} so'm/oyiga</span>
            </div>
            <div className="card__price">
              <div>
                <del>{Math.round(item.price * 1.5)} so'm</del>
                <p>{item.price} so'm</p>
              </div>
              <button className="price__cart">
                <AiOutlineShoppingCart />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductWrapper;
