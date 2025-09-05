const Card = ({moviesData}) => {
    const {Poster, imdbID} = moviesData
    return(
        <li>
            <div className="hero-container">
               <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID} />
                </div>
                <div className="ticket-container">
                    <div className="ticket-content">
                        <a href={`/movie/${imdbID}`}>
                        <button className="ticket_buy-btn">Watch now</button>
                        </a>
                    </div>
                </div>
               </div>
            </div>
        </li>
    )
}

export default Card