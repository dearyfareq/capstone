import React from 'react'
import '../portfolio/portfolio.css'
import IMG1 from '../../assests/portfolio1.png'
import IMG2 from '../../assests/portfolio2.png'
import IMG3 from '../../assests/portfolio3.png'
import IMG4 from '../../assests/portfolio4.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My privous work</h5>
      <h2>Projects</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG1} alt="P1" />
          </div>
          <h3>BBI Project</h3>
          <div className='portfolio__item-cta'>
          <a href="https://www.facebook.com/salahaddin.engineering/posts/pfbid0KsWRWD5rr1H8enpGjcqTCTMTcfBNtKKN8L1EXKqHTYrfoSGLP2677s12UMDKqpVNl" className='btn' rel="noreferrer" target='_blank'>Post link</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG2} alt="P1" />
          </div>
          <h3>Educational channel</h3>
          <div className='portfolio__item-cta'>
          <a href="https://www.youtube.com/channel/UCygxpOK5HqREBO6hZr4Yc6A" className='btn' rel="noreferrer" target='_blank'>channel link</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG3} alt="P1" />
          </div>
          <h3>Graphic design</h3>
          <div className='portfolio__item-cta'>
          <a href="https://www.behance.net/dearyfareq" className='btn' rel="noreferrer" target='_blank'>Behance link</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-img'>
            <img src={IMG4} alt="P1"/>
          </div>
          <h3>Web develompment</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com/dearyfareq" className='btn' rel="noreferrer" target='_blank'>Github link</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio