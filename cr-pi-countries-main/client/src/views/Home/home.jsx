import CardsContainer from "../../components/CardsContainer/CardsContainer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getCountries,getActivities } from "../../redux/actions"
import FilterSelector from "../../components/FilterSelector/filterSelector"
import SortSelector from "../../components/sortSelector/sortSelector"
import style from "./home.module.css"

const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getCountries())
    },[])
    
    useEffect(()=>{
        dispatch(getActivities())
    },[])

    

    return(
        <div className={style.home}>
            <FilterSelector/>
            <SortSelector/>
            <CardsContainer/>
        </div>
    )
}

export default Home