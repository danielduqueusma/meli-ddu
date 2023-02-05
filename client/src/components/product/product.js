import './product.scss';
import { Link } from "react-router-dom"

const Product = ({ product }) => {
    const { price, title, picture, address, id } = product;
    return (
        <>
            <Link to={ `/items/${id}` }>
                <li className='containerProduct'>
                    <section className='containerProduct__contentImage'>
                        <img className='containerProduct__contentImage-image' src={ picture } alt={title}></img>
                    </section>
                    <section className='containerProduct__info'>
                        <span className='containerProduct__info-price'>$ { price }</span>
                        <span className='containerProduct__info-title'>{ title }</span>
                    </section>
                    <section className='containerProduct__location'>
                        <span className='containerProduct__location-label'>{ address.state_name }</span>
                    </section>
                </li>
            </Link>
        </>
    )
}

export default Product;