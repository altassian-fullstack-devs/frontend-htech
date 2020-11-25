import React from 'react'
import { Col, Row, Tag, Rate } from 'antd'

const items_about = [
  {
    title: 'Full-Stack Mobile Expert',
    content: 'Hello, My name is Andrey and I am a top-skilled mobile software expert with 2+ years of experience. My main occupation is React Native and Flutter. I have done several projects with Flutter, Android Native, React-Native, Cocos2d and Swift. I am currently looking for an opportunity to showcase my ability for bulding and maintaining mobile apps.'
  },
]

const items_workhistory = [
  {
    name: 'React Native Developer',
    score: 5,
    date: 'Sep - Oct 2019',
    review: 'Working with Andrey was an amazing experience, he\'s a great developer always available and willing to help us with his expertise.'
  },
  {
    name: 'Prototype for a small "memory-like" childrens game',
    score: 4.5,
    date: 'Aug - Sep 2019',
    review: 'Andrey was very pleasant to work with. Always ready to communicate and ready to go the extra mile. Highly recommend!'
  },
  {
    name: 'Expo Mobile App',
    score: 5,
    date: 'July - Aug 2019',
    review: 'Great work!'
  }
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

const items_employment = [
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
    url: require('assets/images/profile/portfolio1.jpg').default,
    title: 'Canadian Wanderlust',
    content: 'My Travel Blog for my post-university travels'
  },
  {
    url: require('assets/images/profile/portfolio2.jpg').default,
    title: 'Fury Fighting Gear',
    content: 'A fighting gear company I started'
  },
  {
    url: require('assets/images/profile/portfolio3.jpg').default,
    title: 'Original Thai Food',
    content: 'Website I built for a restaurant I like in Thailand'
  },
  {
    url: require('assets/images/profile/portfolio4.jpg').default,
    title: 'Resume Website',
    content: 'A react based resume website template'
  },
  {
    url: require('assets/images/profile/portfolio5.jpg').default,
    title: 'Smirkspace',
    content: 'A React and Meteor based chat University project'
  },
]

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const portfolioLayout = {
  md: { span:8 },
  xs: { span:24 }
}

const About = () => {
  return (
    <section id="about">
      <Row>
        <Col {...leftLayout} align='center'>
          <img className="avatar-layout" src="http://gogs.hope.com/avatars/6?s=287" />
          <h3 className="name">Andrey S.</h3>
        </Col>
        <Col {...rightLayout}>
          <h1>{items_about[0].title}</h1>
          <h3>{items_about[0].content}</h3>
        </Col>
      </Row>
    </section>
  )
}

const Resume = () => {
  return (
    <section id="resume">
      <div className='work'>
        <Row>
          <Col {...leftLayout} align='center'>
            <h1><span>Work history</span></h1>
          </Col>
          <Col {...rightLayout}>
            {items_workhistory.map((item) => (
              <div class="item_workhistory">
                <h1>{item.name}</h1>
                <Rate value={item.score} disabled allowHalf />
                <p className="date">{item.date}</p>
                <h3>{item.review}</h3>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <div className='education'>
        <Row>
          <Col {...leftLayout} align='center'>
            <h1><span>Education</span></h1>
          </Col>
          <Col {...rightLayout}>
            {items_education.map((item) => (
              <div>
                <h1>{item.name}</h1>
                <p className="date">{item.date}</p>
                <h3>{item.degree}</h3>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <div className='employment'>
        <Row>
          <Col {...leftLayout} align='center'>
            <h1><span>Employment history</span></h1>
          </Col>
          <Col {...rightLayout}>
            {items_employment.map((item) => (
              <div>
                <h1>{item.company}</h1>
                <p className="info">{item.title}<span>&bull;</span> <em className="date">{item.date}</em></p>
                <h3>{item.description}</h3>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <Row>
        <Col {...leftLayout} align='center'>
          <h1><span>Skills</span></h1>
        </Col>
        <Col {...rightLayout}>
          <Row>
            {items_skills.map((item) => (
              <Tag className="skill_item" color="#aaa">{item}</Tag>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  )
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h1>Portfolio</h1>

      <Row align='center'>
        <Col span={18}>
          <Row gutter={[50, 50]}>
            {items_portfolio.map((item) => (
              <Col {...portfolioLayout}>
                <div className="portfolio-item">
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
              </Col> 
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  )
}

const Profile = () => {
  return (
    <div>
      <About />
      <Resume />
      <Portfolio />
    </div>
  )
}

export default Profile