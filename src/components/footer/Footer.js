import React from 'react'
import { BsGooglePlay, BsApple, BsInstagram, BsTelegram, BsYoutube, BsFacebook } from "react-icons/bs"
import "./Footer.css"

function Footer() {

    return (
        <div className='container'>
            <div className="footer__container">
                <ul className="collections">
                    <h4>Biz haqimizda</h4>
                    <li className="item">Topshirish punktlari</li>
                    <li className="item">Vakansiyalar</li>
                </ul>
                <ul className="collections">
                    <h4>Foydalanuvchilarga</h4>
                    <li className="item">Biz bilan bog'lanish</li>
                    <li className="item">Savol-Javob</li>
                </ul>
                <ul className="collections">
                    <h4>Tadbirkorlarga</h4>
                    <li className="item">Uzumda Soting</li>
                    <li className='item'>Sotuvchi kabinetiga o'tish</li>
                </ul>
                <div className="collections">
                    <h4>Ilovani yuklab olish</h4>
                    <div className="top">
                        <div className="apple"><BsApple /><span>App Store</span></div>
                        <div className="google__play"><BsGooglePlay /><span>Google Play</span></div>
                    </div>
                    <h4>Ijtimoiy tarmoqlarda kuzating!</h4>
                    <div className="bottom">
                        <BsInstagram />
                        <BsTelegram />
                        <BsYoutube />
                        <BsFacebook />
                    </div>
                </div>
            </div>
            <div className="policy">
                <div className="left">
                    <li>Maxfiylik kelishuvi</li>
                    <li>Foydalanuvchi kelishuvi</li>
                </div>
                <div className="right">
                    <p>«2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                </div>
            </div>
        </div>
    )
}

export default Footer