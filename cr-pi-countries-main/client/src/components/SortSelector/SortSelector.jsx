import { orderAlphabetically, orderAlphabeticallyReverse, orderPopulation, orderPopulationReverse } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SortSelector = () => {
    const dispatch = useDispatch();
    const handleSelectChange = (event) => {
        const selectedOption = event.target.value;
        switch(selectedOption){
            case "option1":
                dispatch(orderAlphabetically());
                break;
            case "option2":
                dispatch(orderAlphabeticallyReverse());
                break;
            case "option3":
                dispatch(orderPopulationReverse());
                break;
            case "option4":
                dispatch(orderPopulation());
                break;
            default:
                break;
        }
    }
    
    return (
        <div>
            <select onChange={handleSelectChange}>
                <option value="">Choose a sort option</option>
                <option value="option1">A-Z</option>
                <option value="option2">Z-A</option>
                <option value="option3">More Populated</option>
                <option value="option4">Less Populate</option>
            </select>
        </div>
    )
}   

export default SortSelector