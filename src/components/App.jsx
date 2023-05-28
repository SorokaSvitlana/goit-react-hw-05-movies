import Home from "Pages/Home";
import Movies from "Pages/Movies";
import { NavLink, Route, Routes } from "react-router-dom";
import Layout from "./Layout";

export const App = () => {

  return (
    <div>
 
       <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element= {<Home />} />
          <Route path="movies" element = { <Movies />}/>
          <Route path="movies/:movieId" element>
            <Route path="cast" element />
            <Route path="reviews" element/>
          </Route>
          <Route path="*" element = {<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
