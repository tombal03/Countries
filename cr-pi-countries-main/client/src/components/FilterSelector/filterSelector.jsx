import React, { useEffect, useState } from "react";
import {
  getCountries,
  filterByContinent,
  filterByActivityName,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./filterSelector.module.css";

const FilterSelector = () => {
  const [showSecondSelect, setShowSecondSelect] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [textInputValue, setTextInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;

    if (!selectedOption) {
      dispatch(getCountries());
    }

    if (selectedOption === "Continent") {
      setShowSecondSelect(true);
    } else {
      setShowSecondSelect(false);
    }

    if (selectedOption === "By Activity name") {
      setShowTextInput(true);
    } else {
      setShowTextInput(false);
      setTextInputValue("");
    }
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const handleSendResponse = () => {
    let aux = parseInt(textInputValue);
    if (!aux) {
      dispatch(filterByActivityName(textInputValue));
    } else {
      return alert("Insert an activity name");
    }
  };

  const handleSelectedContinent = async (event) => {
    const selectedContinent = event.target.value;
    if (selectedContinent) {
      let aux = filterByContinent(selectedContinent);
      dispatch(aux);
    }
  };

  return (
    <div>
      <select className={style.select} value="" onChange={handleSelectChange}>
        <option value="">Choose a filter option</option>
        <option value="Continent">Continent</option>
        <option value="By Activity name">By Activity name</option>
      </select>

      {showSecondSelect && (
        <select className={style.select} onChange={handleSelectedContinent}>
          <option value="">Choose a continent</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Antarctica">Antarctica</option>
        </select>
      )}

      {showTextInput && (
        <div className={style.searchBox}>
          <input
            className={style.select}
            type="text"
            value={textInputValue}
            onChange={handleTextInputChange}
            placeholder="Introduce activity name"
          />
          <button className={style.searchBoxIcon} onClick={handleSendResponse}>Search</button>
        </div>
      )}
    </div>
  );
};

export default FilterSelector;
