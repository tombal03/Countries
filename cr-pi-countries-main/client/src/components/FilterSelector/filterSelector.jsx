import React, { useEffect, useState } from 'react';
import { getCountries, filterByContinent, filterByActivity } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const FilterSelector = () => {
  const [showSecondSelect, setShowSecondSelect] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [textInputValue, setTextInputValue] = useState('');
  const dispatch = useDispatch();

  

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;

    if (!selectedOption) {
      dispatch(getCountries());
    }

    if (selectedOption === 'opcion1') {
      setShowSecondSelect(true);
    } else {
      setShowSecondSelect(false);
    }

    if (selectedOption === 'opcion2') {
      setShowTextInput(true);
    } else {
      setShowTextInput(false);
      setTextInputValue('');
    }
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

const handleSendResponse = () => {
    let aux = parseInt(textInputValue)
    if (Number.isInteger(aux)) {
        dispatch(filterByActivity(textInputValue))
    } else {
        return alert("Insert a number!")
    }
}

  const handleSelectedContinent = async (event) => {
    const selectedContinent = event.target.value;
    if (selectedContinent) {
        let aux = filterByContinent(selectedContinent)
        dispatch(aux);
    }
  };
  

  return (
    <div>
      <select  value= "" onChange={handleSelectChange}>
        <option value="">Choose a filter option</option>
        <option value="opcion1">Continent</option>
        <option value="opcion2">By Activity ID</option>
      </select>

      {showSecondSelect && (
        <select onChange={handleSelectedContinent}>
          <option value="">Choose a continent</option>
          <option value="South America">South America</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Oceania">Oceania</option>
          <option value="Antartica">Antartica</option>
        </select>
      )}

      {showTextInput && (
        <div>
          <input
            type="text"
            value={textInputValue}
            onChange={handleTextInputChange}
            placeholder="Introduce activity ID"
          />
          <button onClick={handleSendResponse}>Search</button>
        </div>
      )}
    </div>
  );
};

export default FilterSelector;