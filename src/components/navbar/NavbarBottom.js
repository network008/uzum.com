import React from 'react'

function NavbarBottom() {

    const DATA = [
        "Elektronika",
        "Maishiy texnika",
        "Kiyim",
        "Poyabzal",
        "Aksesuarlar",
        "Go'zallik",
        "Salomatlik",
        "Uy-qurilish buyumlari",
        "Qurilish va ta'mirlash",
        "Avtotovarlar",
    ]

    return (
        <div className='container'>
            <ul className="nav__bottom-collection">
                {DATA?.map((item, id) => <li key={id} className="nav__bottom-item">{item}</li>)}
            </ul>
        </div>
    )
}

export default NavbarBottom