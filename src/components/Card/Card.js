const Card = ({movie}) => {
  console.log(movie)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{movie.Year}</h6>
        <p className="card-text">{movie.Rated}</p>
      </div>
    </div>
  )
}

export default Card