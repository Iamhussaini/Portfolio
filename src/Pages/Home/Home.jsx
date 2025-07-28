import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Header from '../../Components/MyHeader/Header'
import About from '../../Components/About/About'
import Skills from '../../Components/MySkills/Skills'
import Services from '../../Components/MyServices/Services'
import Education from '../../Components/Education/Education'
import Projects from '../../Components/Projects/Project'
import Footer from '../../Components/MyFooter/Footer'

function Home() {
    
  return (
    <>
     <Navbar />
     <Header/> 
     <About/>
     <Skills/>
     <Services/>
     <Education/>
     <Projects/>
     <Footer/>
    </>
  )
}

export default Home
