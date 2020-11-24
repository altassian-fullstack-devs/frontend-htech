import React from 'react'
import { Tag } from 'antd'
import 'assets/profile/style.css'

const items_about = [
  {
    title: 'Full-Stack Mobile Expert',
    content: 'Hello, My name is Andrey and I am a top-skilled mobile software expert with 2+ years of experience. My main occupation is React Native and Flutter. I have done several projects with Flutter, Android Native, React-Native, Cocos2d and Swift. I am currently looking for an opportunity to showcase my ability for bulding and maintaining mobile apps.'
  },
]

const items_education = [
  {
    name: 'Chelyabinsk State University',
    date: '2016-2018',
    degree: 'Bachelor of Engineering(BEng), Computer Graphics and Computer Science'
  },
  {
    name: 'Nizhny Tagil boarding school No 2',
    date: '2002-2012',
    degree: 'Common High School Science'
  },
]

const items_work = [
  {
    company: 'Exadel, Inc',
    title: 'Software Engineer',
    date: 'Sep 2018 - Feb 2019',
    description: 'Exadel was a great company which you might hope to work in. But I had some free time and I really wanna do nothing except coding that time. And I am out of that company. So I\'d like to find a chance to improve my skill and earn extra cash on Upwork.'
  }
]

const items_skills = ['React Native', 'React', 'Redux Thunk', 'Ionic', 'JavaScript', 'TypeScript', 'Kotlin', 'Swift', 'Java', 'Flutter', 'Python']

const items_portfolio = [
  {
    url: require('assets/profile/portfolio1.jpg').default,
    title: 'Canadian Wanderlust',
    content: 'My Travel Blog for my post-university travels'
  },
  {
    url: require('assets/profile/portfolio2.jpg').default,
    title: 'Fury Fighting Gear',
    content: 'A fighting gear company I started'
  },
  {
    url: require('assets/profile/portfolio3.jpg').default,
    title: 'Original Thai Food',
    content: 'Website I built for a restaurant I like in Thailand'
  },
  {
    url: require('assets/profile/portfolio4.jpg').default,
    title: 'Resume Website',
    content: 'A react based resume website template'
  },
  {
    url: require('assets/profile/portfolio5.jpg').default,
    title: 'Smirkspace',
    content: 'A React and Meteor based chat University project'
  },
]

const About = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="one columns">
          <img className="avatar-layout" src="http://gogs.hope.com/avatars/6?s=287" />
          <h1 className="name">Andrey S.</h1>
        </div>

        <div className="two columns main-col">
          <h2>{items_about[0].title}</h2>
          <h3>{items_about[0].content}</h3>
        </div>
      </div>
    </section>
  )
}

const Resume = () => {
  return (
    <section id="resume">
      <div className="row education">
        <div className="one columns header-col">
          <h1><span>Education</span></h1>
        </div>

        <div className="two columns main-col">
          {items_education.map((item) => (
            <div className="row item">
              <div className="three columns">
                <h2>{item.name}</h2>
                <p className="date">{item.date}</p>
                <h3>{item.degree}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row work">
        <div className="one columns header-col">
          <h1><span>Work</span></h1>
        </div>

        <div className="two columns main-col">
          {items_work.map((item) => (
            <div className="row item">
              <div className="three columns">
                <h2>{item.company}</h2>
                <p className="info">{item.title}<span>&bull;</span> <em className="date">{item.date}</em></p>
                <h3>{item.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        <div className="one columns header-col">
          <h1><span>Skills</span></h1>
        </div>

        <div className="two columns main-col">
          {items_skills.map((item) => (
            <div className="columns row">
              <Tag className="skill_item" color="#aaa">{item}</Tag>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="row">
        <div className="three columns collapsed">
          <h1>Portfolio</h1>
        </div>

        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {items_portfolio.map((item) => (
            <div className="columns portfolio-item">
              <div className="item-wrap">
                <a title={item.title}>
                  <img alt={item.title} src={item.url} />
                  <div className="overlay">
                    <div className="portfolio-item-meta">
                      <h5>{item.title}</h5>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Profile = () => {
  return (
    <div>
      <About/>
      <Resume/>
      <Portfolio/>
    </div>
  )
}

export default Profile