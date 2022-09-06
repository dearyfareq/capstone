import React from 'react'
import Header from './components/header/header'
import Navi from './components/navi/navi'
import About from './components/about/about'
import Experience from './components/experience/experience'
import Service from './components/service/service'
import Portfolio from './components/portfolio/portfolio'
import Testi from './components/testi/testi'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
const App = () => {
    return(
        <>
        <Header />
        <Navi />
        <About />
        <Experience />
        <Service />
        <Portfolio />
        <Testi />
        <Contact />
        <Footer />
        </>
    )
}

export default App