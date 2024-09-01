import React from 'react'
import'./About.css'
import Html from'../assets/HTML5_Badge.svg'
import Css from '../assets/css-3.svg'
import JavaScript from '../assets/javascript.svg'
import Bootstrap from '../assets/bootstrap.png'
import Reacts from '../assets/react.svg'

function About() {
  return (
   <section id='about'>
    <span className='aboutTitle'>What I know</span>
    <span className='aboutDesc'>I am a Skilled and passionate web designer with experience in
         creating visually appealing and user-friendly websites.i have a strong understanding of 
          design and keen eye for detail.i am proficient in HTML,CSS,and JavaScript.</span>

    <div className='aboutBars'>
        <div className='aboutBar'>
            <img src={Html} alt='' className='aboutBarImg' />
            <div className='aboutBarText'>
                <h2>HTML</h2>
                <p>HyperText Markup Language</p>
            </div>
        </div>

        <div className='aboutBar'>
            <img src={Css} alt='' className='aboutBarImg' />
            <div className='aboutBarText'>
                <h2>CSS</h2>
                <p>Cascading Style Sheets</p>
            </div>
        </div>

        <div className='aboutBar'>
            <img src={JavaScript} alt='' className='aboutBarImg' />
            <div className='aboutBarText'>
                <h2>JS</h2>
                <p>JavaScript</p>
            </div>
        </div>

        <div className='aboutBar'>
            <img src={Bootstrap} alt='' className='aboutBarImg' />
            <div className='aboutBarText'>
                <h2>BS</h2>
                <p>BootStrap</p>
            </div>
        </div>

        <div className='aboutBar'>
            <img src={Reacts} alt='' className='aboutBarImg' />
            <div className='aboutBarText'>
                <h2>React</h2>
                <p>React</p>
            </div>
        </div>
    </div>
    
   </section>
  )
}

export default About
