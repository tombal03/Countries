import style from './SearchBar.module.css'
import { useState } from "react";
import { getCountriesByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';


const SearchBar =() => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
  
    const handleSearch = () => {
      dispatch(getCountriesByName(query));
    };

   return (
      <div className={style.contenedor}>
         <input type='search' onChange={(e) => setQuery(e.target.value)} value={query}/>
         <button onClick={handleSearch}>BUSCAR</button>
      </div>
   );
};

export default SearchBar;