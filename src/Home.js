import React from 'react'
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>

        <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
      
      <div className='home__row'>
        <Product title="Oh, the Places You'll Go!" 
        rating={5} 
        price={8.98} 
        image="https://m.media-amazon.com/images/I/51x8pmqjY0L._AC_SY780_.jpg" id="1234" />
        <Product title="Magic Bullet Blender, Small, Silver, 11 Piece Set" 
        rating={4} price={39.95} 
        image="https://images-na.ssl-images-amazon.com/images/I/71FDSqRpGtL._AC_UL330_SR330,330_.jpg" id="5677" />
      </div>
      <div className='home__row'>
        <Product title="Echo Dot (4th Gen) | Smart speaker with clock and Alexa | Glacier White" 
        rating={5} 
        price={84.94} 
        image="https://images-na.ssl-images-amazon.com/images/I/51MzOVciT3L._AC_UL330_SR330,330_.jpg" id="2567" />
        <Product title="Fire 7 tablet, 7inch display, 16 GB, latest model(2019 release), Plum" rating={4} 
        price={36.58} 
        image="https://images-na.ssl-images-amazon.com/images/I/71FyUcuf9rL._AC_UL330_SR330,330_.jpg" id="3790" />
        <Product title="RODE Professional Headphones, Black (NTH- 100)" rating={4} price={149.00}
         image="https://images-na.ssl-images-amazon.com/images/I/51Z4Um160gL._AC_UL330_SR330,330_.jpg" id="5654" />
      </div>
      <div className='home__row'>
        <Product title="Amazon eero Pro mesh WiFi router - brown box packaging" rating={5} price={159.00} 
        image="https://images-na.ssl-images-amazon.com/images/I/21w2lTueFSL._AC_UL110_SR110,110_.jpg" id="5987" />
        
      </div>
    </div>
  )
}

export default Home