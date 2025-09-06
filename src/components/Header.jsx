import './Header.css';

export default function Header({ city, selectedCity, cityChange, citySubmit}) {
    return (
        <div className="header__block">
            <div className="header__logo">
                <img src="logo.png" />
                <h2>Магазин товаров</h2>
            </div>
                <div className="city__block">
                    <h2>{selectedCity ? `Ваш город: ${selectedCity}` : "Введите город"}</h2>
                    <input type="text" className='input' value={city} onChange={cityChange} placeholder='Ваш город' />
                    <button className='btn' onClick={citySubmit}>Выбрать</button>
                </div>
        </div>
    )
}