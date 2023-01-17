import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PocetnaStrana from './komponente/PocetnaStrana';

function App() {
  return (

    <div className="main-div">
    <Router>
      <Routes>
        <Route path="/" element={<PocetnaStrana/>} />
      </Routes>
    </Router >
  </div>

  );
}

export default App;
