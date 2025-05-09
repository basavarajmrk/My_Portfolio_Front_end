import logo from './logo.svg';
import Home from './components/Home';
import Header from './components/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
      <>
      <Header />
      <main>
        < Home />
      </main>

      </>
  );

}

export default App;
