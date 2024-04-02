import './App.css'
import { Route, Routes} from "react-router-dom"
import Blue from "./Components/Blue.jsx"
import Red from "./Components/Red.jsx"
import Pink from "./Components/Pink.jsx"
import Green from "./Components/Green.jsx"
import Black from "./Components/Black.jsx"
import NavBar from "./Components/NavBar.jsx"

function App() {

  return (
    <>
      <div id="container">
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />}></Route>
            <Route path="/red" element={<Red />}></Route>
            <Route path="/pink" element={<Pink />}></Route>
            <Route path="/green" element={<Green />}></Route>
            <Route path="/black" element={<Black />}></Route>
          </Routes>
        </div>

        <NavBar />
      </div>
    </>
  )
}

export default App