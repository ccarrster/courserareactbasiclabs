import './App.css';
import Contact from './Contact';
import Homepage from './Homepage';
import AboutLittleLemon from './AboutLittleLemon';
import { Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Homepage</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/about" element={<AboutLittleLemon/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
