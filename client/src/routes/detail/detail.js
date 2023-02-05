import './detail.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import serverRequest from '../../utils/requestTemplate';
import Categories from '../../components/categories/categories';
import messages from '../../utils/localization.json';

const Detail = () => {
    const { id } = useParams();
    const [detailProduct, setDetailProduct] = useState([]);

    /* eslint-disable */
    useEffect(() => {
        const fetchData = async () => {
            const resultDetail = await serverRequest('GET', `/${id}`);
            setDetailProduct(resultDetail.data)
        }
        fetchData().catch(console.error);
    }, []);
    /* eslint-enable */

    return (
        <>
            { detailProduct.item ? <div className='containerDetail'>
                <Categories categories={ detailProduct.item?.categories }></Categories>
                <section className='containerDetail__content'>
                    <article className='containerDetail__content-image'>
                        <img src={ detailProduct.item.picture } alt={ detailProduct.item.title } />
                    </article>
                    <article className='containerDetail__content-stats'>
                        <span className='sold'>{ detailProduct.item.condition.toLowerCase() === 'new' ? `${messages.detail.nuevo}` : '' } - { detailProduct.item.sold_quantity || 0 } {messages.detail.vendidos}</span>
                        <span className='title'>{ detailProduct.item.title }</span>
                        <span className='price'>$ { detailProduct.item.price }</span>
                        <button className='buy'>{messages.detail.comprar}</button>
                    </article>
                    <article className='containerDetail__content-description'>
                        <span className='title'>{messages.detail.descripcion}</span>
                        <span className='description'>{ detailProduct.item.description }</span>
                    </article>
                </section>
            </div> : `${messages.loading}` }
        </>
    )
}

export default Detail;