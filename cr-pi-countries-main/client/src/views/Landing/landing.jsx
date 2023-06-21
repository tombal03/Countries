import { Link } from "react-router-dom"
import style from "../Landing/landing.module.css"

const Landing = () => {
    return(
        <div className={style.landing}>
            <Link to="/home">
                <button className={style.elemento}> HOME </button>
            </Link>
        </div>
    )
}

export default Landing