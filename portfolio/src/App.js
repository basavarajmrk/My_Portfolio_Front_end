import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Proejct1 from './components/Projects';
// import ProjectDetail from './components/ProjectDetail'; 
function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Proejct1 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
