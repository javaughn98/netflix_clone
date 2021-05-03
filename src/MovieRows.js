import React, { useState, useEffect } from 'react';
import instance from './axios';
import './MovieRow.css'
import YouTube from 'react-youtube';
import trailerUrl from 'movie-trailer';

const url_main = "https://image.tmdb.org/t/p/original/";

function MovieRows({ title, fetchUrl, large }) {
    const [movies, setPosters] = useState([]);
    const [trailer, setTrailer] = useState("");

    useEffect(() => {
        async function fetchData() {
            const data =  await instance.get(fetchUrl)
            console.log(data);
            setPosters(data.data.results);
           return data
        }
        fetchData();
    }, [fetchUrl]);

    const options = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    const handleClick = (movie) => {
        if(trailer) {
            setTrailer("");
        } else {
            trailerUrl(movie?.name || movie?.title || "").then((url) => {
                const parameters = new URLSearchParams(new URL(url).search);
                setTrailer(parameters.get("v"));
            }).catch((error) => console.log(error));
        }
    }

    return (
        <div className="movie_rows">
            <h1 className = "row_title">{title}</h1>
            <div className = "posters">
             {movies.map((movieData) => (
                 <img
                 key = {movieData.id}
                 onClick = {() => {handleClick(movieData)}}
                 className = {`poster ${large && "largePoster"}`}
                 src={`${url_main}${large ? movieData.poster_path : movieData.backdrop_path}`}
                 alt={movieData.name} 
                 />
             ))}  
                
            </div>
            {trailer && <YouTube videoId = {trailer} opts = {options}/>}
        </div>
    )
}

export default MovieRows
