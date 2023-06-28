import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities, getCountries, postActivity } from "../../redux/actions";
import {
  validateName,
  validateDifficulty,
  validateDuration,
  validateSeason,
  validateSelectedCountries
} from "./validations";
import style from "./form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  const countries = useSelector((state) => state.countries).slice().sort((a, b) => a.name.localeCompare(b.name));
  const activities = useSelector((state) => state.activities);
  const [name, setName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [duration, setDuration] = useState("");
  const [season, setSeason] = useState("");
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [formValid, setFormValid] = useState(false);
  const [errors, setErrors] = useState({});

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleDurationChange = (event) => {
    setDuration(event.target.value);
  };

  const handleSeasonChange = (event) => {
    setSeason(event.target.value);
  };

  const handleCountryChange = (event) => {
    const countryId = event.target.value;

    if (!selectedCountries.includes(countryId)) {
      setSelectedCountries([...selectedCountries, countryId]);
    }
  };

  const handleItemClick = (id) => {
    const eliminateCountry = selectedCountries.filter((selectedCountry) => selectedCountry !== id);
    setSelectedCountries(eliminateCountry);
  };

  useEffect(() => {
    const isNameValid = validateName(name);
    const isDifficultyValid = validateDifficulty(difficulty);
    const isDurationValid = validateDuration(duration);
    const isSeasonValid = validateSeason(season);
    const isSelectedCountriesValid = validateSelectedCountries(selectedCountries);
    const isDuplicateName = activities.some((activity) => activity.name.toLowerCase() === name.toLowerCase());

    setErrors({
      name: isDuplicateName ? "Activity name already exists" : isNameValid ? "" : "Please enter a name",
      difficulty: isDifficultyValid ? "" : "Please select a difficulty",
      duration: isDurationValid ? "" : "Please select a duration",
      season: isSeasonValid ? "" : "Please select a season",
      selectedCountries: isSelectedCountriesValid ? "" : "Please select at least one country",
    });

    setFormValid(
      !isDuplicateName &&
      isNameValid &&
      isDifficultyValid &&
      isDurationValid &&
      isSeasonValid &&
      isSelectedCountriesValid
    );
  }, [name, difficulty, duration, season, selectedCountries]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const activity = {
      name,
      difficulty,
      duration,
      season,
      countries: selectedCountries,
    };

    if (formValid) {
      dispatch(postActivity(activity));

      setName("");
      setDifficulty("");
      setDuration("");
      setSeason("");
      setSelectedCountries([]);
      setErrors({});
      alert('Activity created.');
    }
  };

  return (
    <div>
      <Link to="/home">
        <button className={style.button}>HOME</button>
      </Link>
      <form onSubmit={handleSubmit} className={style.formcontainer}>
        <h2>Create New Activity</h2>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Insert activity name"
          required
        />
        {errors.name && <p className={style.error}>{errors.name}</p>}

        <label htmlFor="difficulty">Difficulty:</label>
        <select id="difficulty" value={difficulty} onChange={handleDifficultyChange} required>
          <option value="">Select</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {errors.difficulty && <p className={style.error}>{errors.difficulty}</p>}

        <label htmlFor="duration">Duration:</label>
        <input
          type="text"
          id="duration"
          value={duration}
          onChange={handleDurationChange}
          placeholder="Insert activity duration (in hours)"
          required
        />
        {errors.duration && <p className={style.error}>{errors.duration}</p>}

        <label htmlFor="season">Season:</label>
        <select id="season" value={season} onChange={handleSeasonChange} required>
          <option value="">Select</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
        </select>
        {errors.season && <p className={style.error}>{errors.season}</p>}

        <label htmlFor="countries">Countries:</label>
        <select id="countries" multiple onChange={handleCountryChange} required>
          {countries.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </select>

        <div>
          {errors.selectedCountries && <p className={style.error}>{errors.selectedCountries}</p>}
          <label>Selected Countries:</label>
          <ul className={style.lista}>
            {selectedCountries.map((country) => (
              <li key={country} onClick={() => handleItemClick(country)}>
                {countries.find((country2) => country2.id === country)?.name}
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className={style.button} disabled={!formValid}>
          Create Activity
        </button>
      </form>
    </div>
  );
};

export default Form;
