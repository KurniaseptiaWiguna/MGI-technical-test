import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useState,useEffect} from 'react'
import {BrowserRouter as Router, Route,Switch,useParams}from "react-router-dom";
import Home from './pages/Home';
import Detail from './pages/Detail';
import Favorite from './pages/Favorite';
function App() {
  const initialfavorite = () => {
    const favorite = JSON.parse(localStorage.getItem("favorites"))
    const newfavorite = [

    ]
    if(!favorite){
      localStorage.setItem("favorites",JSON.stringify(newfavorite))
    }
  }
  const getData = async() => {
    try {
      const {data:response} =await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos")
      console.log(response)
      return localStorage.setItem("photos",JSON.stringify(response))
    // return localStorage.setItem("photos",JSON.stringify(response))
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    initialfavorite()
    getData()
    
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/favorite" component={Favorite} />
      </Router>
      {/* <Home/> */}
      {/* <Detail/> */}
    </div>
  );
}

export default App;
