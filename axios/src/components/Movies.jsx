import { useEffect, useState } from "react";
import { getMovie } from "./services/GetServices";
import Card  from "../components/UI/Card"

const Movies = () => {
  const [data, setData] = useState([]);

  const getMoviesData = async () => {
    try {
      const res = await getMovie();
      console.log(res.data.Search);
      setData(res.data.Search);
    } catch (error) {
      console.log("Error message", error.message);
      console.log("Error status", error.response.status);
      console.log("Error data", error.response.data);
    }
  };

  useEffect(() => {
    getMoviesData();
  }, []);

  return (
    <ul className= "p-28 grid grid-cols-4">
      {data.map((curElem) => {
        return <Card key={curElem.imdbID} moviesData={curElem} />;
      })}
    </ul>
  );
};

export default Movies;
