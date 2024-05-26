import { useEffect, useState } from "react";
import "./RowPost.css";
import YouTube from "react-youtube";
import axios from "../../config";
import {  API_KEY, image_URL } from "../constants/constants";


const RowPost = (props) => {
  const [movies, setMovies] = useState([]);
  const [urlId,setUrlId]=useState();
  useEffect(()=>{
    axios.get(props.url).then(response=>{
      setMovies(response.data.results);
    });
  },[]);

  const opts={
    height:'390',
    width:'100%',
    playerVars:{
      autoplay: 1,
    }
  }
  const handleMovie=(id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}`).then(response=>{
      console.log(response.data);
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className="row">
        <h2 className="title">
            {props.title}
        </h2>
        { urlId && <YouTube videoId={urlId.key} opts={opts} />}
        <div className="posters">
          {movies.map(movie=>(
            <img onClick={()=>handleMovie(movie.id)} src={image_URL+movie?.backdrop_path} alt="poster" className={props.isSmall?"smallPoster":"poster"} key={movie.id}/>
          ))}
            
        </div>
       
    </div>
  )
}
export default RowPost