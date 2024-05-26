import { API_KEY } from "./components/constants/constants";

const url=[
    {
        title:"Netflix Originals",
        url:`/discover/tv?api_key=${API_KEY}`,
        isSmall:false
    },
    {
        title:"Action",
        url:`discover/movie?api_key=${API_KEY}&with_genres=28`,
        isSmall:true
    },
    {
        title:"Adventure",
        url:`discover/movie?api_key=${API_KEY}&with_genres=12`,
        isSmall:true
    },
    {
        title:"Comedy",
        url:`discover/movie?api_key=${API_KEY}&with_genres=35`,
        isSmall:true
    },
    {
        title:"Drama",
        url:`discover/movie?api_key=${API_KEY}&with_genres=18`,
        isSmall:true
    },
    {
        title:"Animation",
        url:`discover/movie?api_key=${API_KEY}&with_genres=16`,
        isSmall:true
    },
    {
        title:"Romance",
        url:`discover/movie?api_key=${API_KEY}&with_genres=10749`,
        isSmall:true
    },
    {
        title:"Fantasy",
        url:`discover/movie?api_key=${API_KEY}&with_genres=14`,
        isSmall:true
    },
    {
        title:"Horror",
        url:`discover/movie?api_key=${API_KEY}&with_genres=27`,
        isSmall:true
    }
]

export default url;