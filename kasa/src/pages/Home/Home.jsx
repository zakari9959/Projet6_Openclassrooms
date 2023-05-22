import React from 'react'
import Banner from '../../components/Banner/Banner'
import bannerImage from '../../components/Banner/banner--home.png'
import './Home.css'
import Gallery from '../../components/Gallery/Gallery'
//import ReactDOM from 'react-dom'
const Home = () => (
  <div className="homePage">
    <Banner image={bannerImage} showText={true} />
    <Gallery />
  </div>
)

export default Home
