import { useState } from "react";
import MoviesData from "../moviesData"

const HndlPrintMovies = ({ getData }) => {
    const [data, setData] = useState([MoviesData])
    console.log(data);
    return (
        <div className="AllMovies">
            {data?.map((data, index) => {

            })}
        </div>
    )
}

export default HndlPrintMovies;