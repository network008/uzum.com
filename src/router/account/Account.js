import React from "react";
import "./Account.css";

function Account() {
  return (
    <div className="container account">
      <div className="account__container">
        <h2>Telefon raqamini kiriting</h2>
        <h3>Tasdiqlash kodini SMS orqali yuboramiz</h3>
        <div className="account__input">
          <p className="number">+998</p>
          <input type="text" name="" id="" placeholder="00 000-00-00" />
        </div>
        <button className="account__button">Kodni olish</button>
        <br />
        <a href="#" className="account__link">
          Parol bilan kirish
        </a>
        <p>
          Avtotizatsiyadan o'tish orqali siz shaxsiy ma'lumotlarni qayta ishlash
          siyosatiga rozilik bildirasiz
        </p>
      </div>
    </div>
  );
}

export default Account;
