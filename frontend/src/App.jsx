
import './App.css'
import MovieCard from "./components/MovieCard"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Favorite from './pages/Favorites'
import NavBar from "./components/NavBar"
function App() { 
  return (
  <main className="main-content">
     <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorite/>}/>
    </Routes>
   
  </main>
  )
}

export default App;