import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PocetnaStrana from './komponente/PocetnaStrana';
import KontaktStrana from './komponente/KontaktStrana';

function App() {
  return (

    <div className="main-div">
    <Router>
      <Routes>
        <Route path="/" element={<PocetnaStrana/>} />
        <Route path="/kontakt" element={<KontaktStrana/>} />
      </Routes>
    </Router >
  </div>

  );
}

export default App;
