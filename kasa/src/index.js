import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import FicheLogement from './pages/FicheLogement/FicheLogement.jsx'
import About from './pages/About/About.jsx'
import Error from './pages/Error/Error.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement" element={<FicheLogement />} />{' '}
        {/*Ajouter l'id sur cette route*/}
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
