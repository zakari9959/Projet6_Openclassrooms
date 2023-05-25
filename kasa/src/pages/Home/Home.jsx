import React from 'react'
import Banner from '../../components/Banner/Banner'
import bannerImage from '../../components/Banner/banner--home.png'
import './Home.css'
import CardList from '../../components/CardList/CardList'

const Home = () => (
  <div className="homePage">
    <Banner image={bannerImage} showText={true} />
    <CardList />
  </div>
)

export default Home
