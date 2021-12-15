const SearchItme = ({search,setSearch}) => {
    return (
        <form className="searchForm" onSubmit={(e)=>e.preventDefault(e)}>
            <label htmlFor="search">Search</label>
            <input 
                id="search"
                type='text'
                role='searchbox'
                placeholder="Search Items"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
            />    
        </form>
    )
}

export default SearchItme
