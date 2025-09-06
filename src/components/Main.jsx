import { useState } from "react";
import './Main.css'

export default function Main({ products }) {
    const [showInfo, setShowInfo] = useState(null)

    const toggleInfo = (id) => {
        setShowInfo(showInfo === id ? null : id)
    }

    return (
        <div className="main__block">
            <h1>Товары магазина ({products.length})</h1>
            <div className="products__block">
                {products.map((item) => (
                    <div className="card__block" key={item.id}>
                        <img src={item.img} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button className="btn_main" onClick={() => toggleInfo(item.id)}>
                        {showInfo === item.id ? 'Скрыть' : 'Подробнее'}</button>
                        {showInfo === item.id && (
                            <div className="info__block">
                                Бренд: {item.brand} | Год: {item.year} | Цена: {item.price}$
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}