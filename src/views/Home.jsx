import React from 'react'
import Banner from "../components/Banner";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <div className='main-content'>
        <Menu></Menu>
        </div>
    </>
  )
}

export default Home