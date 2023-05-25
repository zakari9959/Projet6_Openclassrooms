import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import FicheLogement from '../FicheLogement/FicheLogement'
import About from '../About/About'
import Error from '../Error/Error'
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'

const PagesRoutes = () => (
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fichelogement/:id" element={<FicheLogement />} />
        {/*Ajouter l'id sur cette route*/}
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
export default PagesRoutes
