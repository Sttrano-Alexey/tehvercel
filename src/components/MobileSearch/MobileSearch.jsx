import './MobileSearch.css'

export default function MobileSearch({onClick}){
    const handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.search.value;
        window.location.href = `/products?search=${searchQuery}`;
    }

    return(
        <>
            <div className="mobile-search">
                <form className="mobille-search-body" onSubmit={handleSearch}>
                    <span>Поиск товара</span>
                    <div>
                        <input name="search" className='mobile-input-search' type="text" placeholder="Поиск по сайту"/>
                    </div>
                    <button className='mobile-input-bth'>Искать в каталоге</button>
                </form>
                <div className="mobile-search-bg" onClick={onClick}></div>
            </div>
        </>
    )
}
