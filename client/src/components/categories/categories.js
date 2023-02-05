import './categories.scss';

const Categories = ({ categories }) => {
    return (
        <>
            <section className='containerCategories'>
                <span className='containerCategories__label'>{ categories ? categories.splice(0, 5).join(' > ') : '' }</span>
            </section>
        </>
    )
}

export default Categories;