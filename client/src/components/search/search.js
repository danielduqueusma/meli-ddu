import './search.scss';
import messages from '../../utils/localization.json';
import { useNavigate, createSearchParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import serverRequest from '../../utils/requestTemplate';

const Search = ({handleSearch}) => {
    const navigate = useNavigate();
    const [queryParameters] = useSearchParams();
    const [searchValue, setSearchValue] = useState('');

    /* eslint-disable */
    useEffect(() => {
        if (!searchValue) setSearchValue(queryParameters.get('search'));
    }, [])
    /* eslint-enable */

    /**
     * @description Redirect to results page when search has been entered.
     */
    const handleGoToResultsPage = async () => {
        if (!searchValue) return;
        const searchResults = await serverRequest('GET', `?search=${searchValue}`);
        navigate({
            pathname: '/items',
            search: createSearchParams({
                search: searchValue
            }).toString()
        });
        handleSearch(searchResults);
    }

    /**
     * @description Clear search input and redirect to home page.
     */
    const handleGoToHome = () => {
        setSearchValue('');
        navigate('/');
    }

    /**
     * @description Set input value
     * @param {Object} of DOM.
     */
    const handleChange = (e) => {
        setSearchValue(e.target.value);
    }

    /**
     * 
     * @description Fire search process once ENTER key be pressed.
     * @param {Object} of DOM.
     */
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleGoToResultsPage();
    }
    
    return (
        <>
            <section className='containerSearch'>
                <i className='containerSearch__navLogo' onClick={ handleGoToHome }></i>
                <div className='containerSearch__navSearch'>
                    <input
                        type='text'
                        className='containerSearch__navSearch-searchInput'
                        placeholder={ messages.search.label }
                        onChange={ handleChange }
                        value={ searchValue || '' }
                        onKeyDown={ handleKeyDown }
                    />
                    <div className='containerSearch__navSearch-searchIcon'>
                        <i className='icon' onClick={ handleGoToResultsPage }></i>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search;
