import './Footer.css';

export default function Footer({ sponsors }) {
    return (
        <div className="footer__block">
            <div className="footer__logo">
                <img src="logo.png" />
                <h2>Магазин товаров</h2>
            </div>
            <div className="sponsors">
                {sponsors.map((sponsor, ind) => (
                    <div key={ind} className='sponsor'>{sponsor}</div>
                ))}
            </div>
        </div>
    )
}