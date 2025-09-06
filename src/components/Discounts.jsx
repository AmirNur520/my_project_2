import { useState } from "react";
import './Discounts.css'

export default function Discounts({ images }) {
    const [index, setIndex] = useState(0)

    const prevImage = () => {
        setIndex(index === 0 ? images.length - 1 : index - 1)
    }
    const nextImage = () => {
        setIndex(index === images.length - 1 ? 0 : index + 1)
    }

    return (
        <div className="discount__block">
            <h1>Скидки</h1>
            <div className="slider">
                <button onClick={prevImage}>Назад</button>
                <img src={images[index]} alt="Скидка" />
                <button onClick={nextImage}>Вперед</button>
            </div>
        </div>
    )
}