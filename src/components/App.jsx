import { useState } from 'react'
import './App.css'

import Header from './Header'
import Main from './Main'
import Discounts from './Discounts'
import Footer from './Footer'

import img1 from '../assets/products/1.jpg'
import img2 from '../assets/products/2.jpg'
import img3 from '../assets/products/3.jpg'
import img4 from '../assets/products/4.jpg'
import img5 from '../assets/products/5.jpg'
import img6 from '../assets/products/6.jpg'
import img7 from '../assets/products/7.jpg'
import img8 from '../assets/products/8.jpg'
import img9 from '../assets/products/9.jpg'
import img10 from '../assets/products/10.jpg'
import img11 from '../assets/products/11.jpg'
import img12 from '../assets/products/12.jpg'


import d1 from '../assets/products/1.jpg'
import d2 from '../assets/products/2.jpg'
import d3 from '../assets/products/3.jpg'
import d4 from '../assets/products/4.jpg'
import d5 from '../assets/products/5.jpg'
import d6 from '../assets/products/6.jpg'
import d7 from '../assets/products/7.jpg'
import d8 from '../assets/products/8.jpg'
import d9 from '../assets/products/9.jpg'
import d10 from '../assets/products/10.jpg'

export default function App() {
    const [city, setCity] = useState('')
    const [selectedCity, setSelectedCity] = useState('')

    const cityChange = (e) => {
        setCity(e.target.value)
    }
    const citySubmit = (e) => {
        setSelectedCity(city)
    }

    const products = [
        {
            id: 1,
            name: 'Телевизор Samsung QLED 55',
            description: 'Современный 4K UHD телевизор с ярким изображением и поддержкой HDR',
            brand: 'Samsung',
            year: 2024,
            price: 950,
            img: img1
        },
        {
            id: 2,
            name: 'Стиральная машина LG EcoBubble',
            description: 'Энергоэффективная стиральная машина с технологией EcoBubble и функцией быстрой стирки',
            brand: 'LG',
            year: 2023,
            price: 600,
            img: img2
        },
        {
            id: 3,
            name: 'Кондиционер LG DualCool',
            description: 'Инверторный кондиционер LG с функцией быстрой очистки воздуха и тихой работой',
            brand: 'LG',
            year: 2023,
            price: 750,
            img: img3
        },
        {
            id: 4,
            name: 'Холодильник LG Door-in-Door',
            description: 'Двухкамерный холодильник с системой Total No Frost и функцией Door-in-Door',
            brand: 'LG',
            year: 2024,
            price: 1200,
            img: img4
        },
        {
            id: 5,
            name: 'Робот-пылесос Xiaomi Mi Robot',
            description: 'Умный робот-пылесос с функцией лазерной навигации и поддержкой управления через смартфон',
            brand: 'Xiaomi',
            year: 2024,
            price: 400,
            img: img5
        },
        {
            id: 6,
            name: 'Iphone 13 Pro Max',
            description: 'Смартфон Apple с дисплеем Super Retina XDR и тройной системой камер Pro',
            brand: 'Apple',
            year: 2022,
            price: 1100,
            img: img6
        },
        {
            id: 7,
            name: 'Наушники Apple AirPods Max',
            description: 'Беспроводные наушники с активным шумоподавлением и пространственным звуком',
            brand: 'Apple',
            year: 2023,
            price: 550,
            img: img7
        },
        {
            id: 8,
            name: 'MacBook Pro 16',
            description: 'Мощный ноутбук Apple с чипом M2 Pro, Retina дисплеем и до 20 часов автономной работы',
            brand: 'Apple',
            year: 2023,
            price: 2500,
            img: img8
        },
        {
            id: 9,
            name: 'iPad Pro 12.9',
            description: 'Планшет Apple с дисплеем Liquid Retina XDR и поддержкой Apple Pencil 2',
            brand: 'Apple',
            year: 2024,
            price: 1400,
            img: img9
        },
        {
            id: 10,
            name: 'Apple Watch Series 9',
            description: 'Смарт-часы Apple с датчиком температуры, пульсометром и интеграцией с Iphone',
            brand: 'Apple',
            year: 2023,
            price: 500,
            img: img10
        },
        {
            id: 11,
            name: 'Фотоаппарат Nikon D780',
            description: 'Полноформатная беззеркальная камера с быстрой автофокусировкой и 4K-видео',
            brand: 'Nikon',
            year: 2022,
            price: 180,
            img: img11
        },
        {
            id: 12,
            name: 'PlayStation 5',
            description: 'Игровая приставка нового поколения с ультрабыстрым SSD и поддержкой 4K-графики',
            brand: 'Sony',
            year: 2023,
            price: 700,
            img: img12
        },
    ]

    const [discountImages] = useState([
        d1, d2, d3, d4, d5, d6, d7, d8, d9, d10
    ])
    const sponsors = ["Apple", "Samsung", "LG", "Xiaomi", "Sony"]

    return (
        <div className="app">
            <Header 
            city={city}
            selectedCity={selectedCity}
            cityChange={cityChange}
            citySubmit={citySubmit}
            />
            <Main products={products} />
            <Discounts images={discountImages} />
            <Footer sponsors = {sponsors}/>
        </div>
    )
}