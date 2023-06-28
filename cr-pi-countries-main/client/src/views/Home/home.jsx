import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getActivities } from "../../redux/actions";
import FilterSelector from "../../components/FilterSelector/filterSelector";
import SortSelector from "../../components/SortSelector/SortSelector";
import styles from "./home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  useEffect(() => {
    dispatch(getActivities());
  }, []);

  return (
    <div className={styles.home}>
      <div className={styles.filters}>
        <FilterSelector />
        <SortSelector />
      </div>
      <CardsContainer />
    </div>
  );
};

export default Home;
