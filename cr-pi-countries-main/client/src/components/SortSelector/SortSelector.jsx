import {
  orderAlphabetically,
  orderAlphabeticallyReverse,
  orderPopulation,
  orderPopulationReverse,
} from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./SortSelector.module.css";

const SortSelector = () => {
  const dispatch = useDispatch();
  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;
    switch (selectedOption) {
      case "A-Z":
        dispatch(orderAlphabetically());
        break;
      case "Z-A":
        dispatch(orderAlphabeticallyReverse());
        break;
      case "More Populate":
        dispatch(orderPopulationReverse());
        break;
      case "Less Populate":
        dispatch(orderPopulation());
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <select className={style.select} onChange={handleSelectChange}>
        <option value="">Choose a sort option</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="More Populate">More Populate</option>
        <option value="Less Populate">Less Populate</option>
      </select>
    </div>
  );
};

export default SortSelector;
