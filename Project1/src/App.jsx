import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Title subTitle="OUR PROGRAMS" title="What we offer"/>
    <Programs/>
    <About/>
    <Title subTitle="GALLERY" title="Campus Photos"/>
    <Campus/>
    <Title subTitle="TESTIMONIALS" title="What Student Says"/>
    <Testimonials/>
    <Title subTitle="CONTACT US" title="Get in Touch"/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
