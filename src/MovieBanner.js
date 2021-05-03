import React, { useState, useEffect } from 'react';
import './MovieBanner.css';
import instance from './axios';
import req from './req'

function MovieBanner() {

    const[movie, setBanner] = useState([]);

    useEffect(() => {
        async function fetchData() {
        const data = await instance.get(req.fetchTrending);
        setBanner(data.data.results[Math.floor(Math.random() * data.data.results.length - 1)]);
            return data;
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    return (
        <div className = "mainBanner"
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
        >
            <div className = "content">
                <h1 className = "title">{movie?.name || movie?.original_name || movie?.title}</h1>
                <div className = "buttons">
                    <button className = "banner_button">Play</button>
                    <button className = "banner_button">My List</button>
                </div>
                <h1 className = "description">{truncate(movie?.overview, 200)}</h1>
            </div>
            <div className="fade"></div>
            
        </div>
    )
}

export default MovieBanner
