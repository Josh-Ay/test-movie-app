import "./style.css";


const SearchBar = ({ searchValue, setSearchValue }) => {
    return <>
        <div className="search__Bar__Container">
            <p>Search</p>
            <input type={"text"} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    </>
}

export default SearchBar;
