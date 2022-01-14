const Card = props => {
  console.log(props)
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.movie.Title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.movie.Year}</h6>
        <p className="card-text">{props.movie.Rated}</p>
      </div>
    </div>
  )
}

export default Card