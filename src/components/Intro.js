import React from 'react'
import './Intro.css'
import Hire from'../assets/hireme.png'
import reactLogo from'../assets/pb.png'
import { Link } from 'react-scroll'


function Intro() {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>
              I'm <span className='introName'>Ajay</span>
              <br/>
              Web Developer
            </span>
            <p className='introPara'>
              I am a skilled web developer with experience in creating
              <br/>
              visually appealing and user friendly websites.
            </p>
            <Link>
            <button className='btn2'>
                <img src={Hire} alt='Img' className='btnImg2' />
                Hire Me
            </button>
            </Link>
        </div>

        <img src={reactLogo} alt='React Logo' className='logo2' />
    </section>
  )
}

export default Intro
