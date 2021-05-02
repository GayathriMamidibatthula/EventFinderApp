const Movie=({match})=>{
    return(
      <div>
            <h2>Movie Details Page</h2>
      <p> Hello {match.params.moviename}</p>
      </div>
  
    )
  }

export default Movie;