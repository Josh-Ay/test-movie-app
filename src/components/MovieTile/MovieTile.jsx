import { useState } from "react";
import "./style.css";


const MovieTile = ({ movie }) => {
    const [ isMouseOver, setMouseOver ] = useState(false);
    const customStyle = {
        background: movie.Poster ? `url(${movie.Poster})` : "#000",
    }
    
    return <>
        <div className="movie__Tile__Container" style={customStyle} onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
            <div className="movie__Details">
                <p>{ isMouseOver ? movie.Plot : movie.Title }</p>
            </div>
        </div>
    </>
}

export default MovieTile;