import style from "./SearchBar.module.css";
import { useState } from "react";
import { getCountriesByName } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(getCountriesByName(query));
  };

  return (
    <div className={style.search}>
      <div className={style.searchBox}>
        <input
          className={style.input}
          type="search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search..."
        />
      </div>
      <Link to="/home">
        <button className={style.searchBoxIcon} onClick={handleSearch}>
          BUSCAR
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
