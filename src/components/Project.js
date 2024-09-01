import React from 'react'
import'./Project.css'
import Banner from'../assets/Pb-B.png'

function Project() {
  return (
    <section id='project'>
        <h2 className='projectTitle'>My Projects</h2>
        <span className='projectDesc'>Here are my projects</span>

        <div className='project-item'>
          <div className='item-details'>
            <p className='p1'>Project-1</p>
            <p className='p2'>TechStack:- HTML and CSS</p>
          </div>
          <a href=''><img src={Banner} alt='project-1' className='projectImg' /></a>

        </div>

        <div className='project-item'>
          <div className='item-details'>
            <p className='p1'>Project-2</p>
            <p className='p2'>TechStack:- HTML, CSS and BootStrap</p>
          </div>
          <a href=''><img src={Banner} alt='project-2' className='projectImg' /></a>

        </div>

        <div className='project-item'>
          <div className='item-details'>
            <p className='p1'>Project-2</p>
            <p className='p2'>TechStack:- React</p>
          </div>
          <a href=''><img src={Banner} alt='project-3' className='projectImg' /></a>

        </div>



    </section>
  )
}

export default Project
