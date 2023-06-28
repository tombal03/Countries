import style from "./detail.module.css";
import { getCountriesById } from "../../redux/actions";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountriesById(id));
  }, []);

  const country = useSelector((state) => state.country);

  useEffect(()=> {
    console.log(country)
  }, [country])

  return (
    <div>
      <Link to="/home">
        <button className={style.button}>HOME</button>
      </Link>

      <div className={style.body}>
        <img src={country.image} alt="" />
        <p> Name: "{country.name}" </p>
        <p> Continent: {country.continent} </p>
        <p> Capital: {country.capital} </p>
        <p> Subregion: {country.subregion} </p>
        <p> Area: {country.area} </p>
        <p> Population: {country.population} </p>
        <p> Activities: </p>
        <ul>
          {country.Activities?.map((activity) => (
            <li>
              <p>Name: {activity.name}</p>
              <p>Difficulty: {activity.difficulty}</p>
              <p>Duration: {activity.duration}</p>
              <p>Season: {activity.season}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Detail;
