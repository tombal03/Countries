import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const NavBar = ({ onSearch }) => {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(getCountries());
  };

  const handleChange = (event) => {};

  return (
    <div className={style.mainCointaner}>
      <Link to="/home" onClick={handleHomeClick}>HOME</Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/create">FORM</Link>
    </div>
  );
};

export default NavBar;