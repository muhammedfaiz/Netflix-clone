import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import RowPost from "./components/RowPost/RowPost";
import url from "./url";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      {
        url.map((data,index)=>{
          return(<RowPost title={data.title} url={data.url} key={index} isSmall={data.isSmall}/>)
        })
      }
      
    </div>
  );
}

export default App;
