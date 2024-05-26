import "./Banner.css";
import { useEffect, useState } from "react";
import axios from "../../config";
import { API_KEY, image_URL } from "../constants/constants";

const Banner = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(`/movie/top_rated?api_key=${API_KEY}`).then((response) => {
      const randomIndex = Math.floor(Math.random()*response.data.results.length)
      setData(response.data.results[randomIndex]);
    });
  }, []);

  return (
    <div
      className="banner"
      style={{ backgroundImage:`url(${data ? image_URL + data.backdrop_path : ""})` }}
    >
      <div className="content">
        <h1 className="title">{data ? data.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{data ? data.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};
export default Banner;
