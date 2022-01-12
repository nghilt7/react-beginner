import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setLoading(false);
    setMovie(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      {loading ? (
        <h1>Detail Loading...</h1>
      ) : (
        <MovieDetail
          large_cover_image={movie.large_cover_image}
          title={movie.title}
          rating={movie.rating}
          description_full={movie.description_full}
        />
      )}
    </div>
  );
}

export default Detail;
