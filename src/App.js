import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Achievements from "./pages/Achievements"
import Learning from "./pages/Learning"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/learning" element={<Learning />} />         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
