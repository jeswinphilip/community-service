import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import BusSchedules from './pages/BusSchedules'
import Donors from './pages/Donors'
import Register from './pages/Register'

function App() {
  return (
    <div className="container">
      <header>
        <h1>OCYM Pampady</h1>
        <p>Community Service Platform</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buses" element={<BusSchedules />} />
          <Route path="/donors" element={<Donors />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
