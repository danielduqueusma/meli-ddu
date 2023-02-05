import { useEffect, useState } from 'react';
import Product from '../../components/product/product';
import Categories from '../../components/categories/categories';
import './results.scss';
import serverRequest from '../../utils/requestTemplate';
import { useSearchParams } from "react-router-dom";
import messages from '../../utils/localization.json';

const Results = ({ products }) => {
    const [productsFetched, setProductsFetched] = useState([]);
    const [queryParameters] = useSearchParams();

    /* eslint-disable */
    useEffect(() => {
        const fetchData = async () => {
            const searchResults = await serverRequest('GET', `?search=${queryParameters.get('search')}`);
            setProductsFetched(searchResults.data)
        }
        fetchData().catch(console.error);
    }, []);
    /* eslint-enable */
    
    return (
        <>
            <ul className='containerResults'>
                <Categories categories={ products.categories || productsFetched.categories }></Categories>
                { products.items ? products.items.map((product) => {
                    return <Product product={ product } key={ product.id }></Product>
                }) : productsFetched.items ? productsFetched.items.map((product) => {
                    return <Product product={ product } key={ product.id }></Product>
                }) : <span>{messages.loading}</span> }
            </ul>
        </>
    )
}
export default Results;