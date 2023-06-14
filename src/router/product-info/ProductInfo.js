import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillStar, AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import "./ProductInfo.css";

function ProductInfo() {
  const data = useLocation().state;

  const [amount, setAmout] = useState(1);

  return (
    <div className="container">
      <div className="product__info__container">
        <div className="product__info" key={data.id}>
          <div className="left">
            <img src={data.url} alt="" />
          </div>
          <div className="right">
            <div className="top">
              <p className="info__rating">
                <div className="rate">
                  <AiFillStar />
                  <span>5.0 (585 baho)</span>
                </div>
                <div className="heart">
                  <AiOutlineHeart /> Istaklarga
                </div>
              </p>
              <h3 className="info__title">{data.title}</h3>
              <p className="seller">Sotuvchi: PROGRESS</p>
              <p className="delivery">Yetkazib berish: 1 kun, bepul</p>
            </div>
            <div className="bottom">
              <div className="amount">
                <p>Miqdor:</p>
                <div className="setAmout">
                  <button
                    onClick={
                      amount > 1
                        ? () => setAmout((p) => p - 1)
                        : () => setAmout(1)
                    }
                  >
                    -
                  </button>
                  <p>{amount}</p>
                  <button onClick={() => setAmout((p) => p + 1)}>+</button>
                </div>
                <div className="price">
                  <p>Narx:</p>
                  <div>
                    <h3>{amount * data.price} so'm</h3>
                    <del>{Math.round(data.price * 1.5)} so'm</del>
                  </div>
                </div>
                <div className="info__monthly">
                  <span>{Math.round((data.price * 1.44) / 12)} so'mdan</span>
                  &nbsp; muddatli to'lov
                </div>
                <div className="info__cart">
                  <button>Savatga qo'shish</button>
                  <button>Tugmani 1 bosishda xarid qilish</button>
                </div>
                <div className="cartAmount">
                  <AiOutlineShopping />
                  <span>Bu haftada 2593 kishi sotib oldi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom__product__cart">
        <div className="bottom__navigation">
          <div>
            <p>Narx umumiy</p>
            <h4>{amount * data.price}</h4>
          </div>
          <div>
            <AiOutlineHeart />
          </div>
          <div>
            <button>Savatga qo'shish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
