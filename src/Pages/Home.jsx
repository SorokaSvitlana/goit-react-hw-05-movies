import fetchTranding from "API/GetTrending";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    // const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      async function getMovieList() {
        try {
        //   setLoading(true);
          const response = await fetchTranding();
          setMovieList([...response]);
        } catch (error) {
          console.log(error);
        }
      }
      getMovieList();
    }, []);
    const location = useLocation();
    const routeName = location.pathname.includes('/movies') ? '' : 'movies/';
    console.log(movieList)
    return (
      <>
        {/* {loading && <Loader />} */}
        <h1>Trending today</h1>
        <ul>
      {movieList.map(el => {
        return (
          <li key={el.id}>
            <Link to={`${routeName}${el.id}`} state={{ from: location }}>
              {el.title}
            </Link>
          </li>
        );
      })}
    </ul>
      </>
    );
} 

export default Home