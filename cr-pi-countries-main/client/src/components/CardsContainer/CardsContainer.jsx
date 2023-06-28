import Card from "../Card/Card";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import Paginate from "../Paginate/Paginate";
import { useEffect, useState } from "react";

const CardsContainer = () => {
  let countries = useSelector((state) => state.countries);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(10);
  const indexLastCountry = currentPage * countriesPerPage;
  const indexFirstCountry = indexLastCountry - countriesPerPage;
  const countriesaux = countries.slice(indexFirstCountry, indexLastCountry);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

  return (
    <div>
      {countriesaux.length ? (
        <div className={style.container}>
          {countriesaux.map((country) => {
            return (
              <Card
                key={country.id}
                id={country.id}
                name={country.name}
                continent={country.continent}
                capital={country.capital}
                subregion={country.subregion}
                area={country.area}
                population={country.population}
                image={country.image}
              />
            );
          })}
        </div>
      ) : (
        <div className={style.alert}>You don't found anything!</div>
      )}

      <Paginate
        currentPage={currentPage}
        countriesPerPage={countriesPerPage}
        countries={countries}
        paginate={paginate}
      />
    </div>
  );
};

export default CardsContainer;
