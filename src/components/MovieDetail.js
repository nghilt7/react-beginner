function MovieDetail({ large_cover_image, title, rating, description_full }) {
  return (
    <div>
      <img src={large_cover_image} alt={title}></img>
      <h1>Title: {title}</h1>
      <h3>Rating</h3>
      <p>{rating}</p>
      <h3>Description</h3>
      <p>{description_full}</p>
    </div>
  );
}

export default MovieDetail;
