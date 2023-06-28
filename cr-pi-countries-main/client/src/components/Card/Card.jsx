import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.card}>
      <Link to={`/detail/${props.id}`}>
        <img src={props.image} alt="" className={style.img} />
      </Link>
      <p> Name:{props.name}</p>
      <p> Continent:{props.continent} </p>
    </div>
  );
};

export default Card;
