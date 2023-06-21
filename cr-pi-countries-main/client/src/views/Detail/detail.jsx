import style from "../Detail/detail.module.css"
import { getCountriesById } from "../../redux/actions"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {

    const {id} = useParams();
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountriesById(id))
    },[])
    
    const country = useSelector(state=>state.country)
    console.log(country.activities)
    
    return(
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
                {country.activities?.map((activity) => (
                    <li>
                        <p>Name: {activity.name}</p>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration: {activity.duration}</p>
                        <p>Season: {activity.season}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Detail