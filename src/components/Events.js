const Events=()=>{
    return(
      <h2>Events Page</h2>
    )
  }
  const Movie=({match})=>{
    return(
      <div>
            <h2>Movie Details Page</h2>
      <p> Hello {match.params.moviename}</p>
      </div>
  
    )
  }

export default Events;