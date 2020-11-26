import React from 'react'
import { Col, Row, Tag, Rate, Typography, Button, Space, Modal, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'

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

const { Title } = Typography
const { TextArea } = Input

const ReachableContext = React.createContext();
const UnreachableContext = React.createContext();

const modalEditTitle = {
  title: 'Your Title',
  icon: null,
  content: (
    <ReachableContext.Consumer>{value => <Input defaultValue={value} />}</ReachableContext.Consumer>
  ),
};

const modalEditOverview = {
  title: 'Overview',
  icon: null,
  content: (
    <ReachableContext.Consumer>{value => <TextArea defaultValue="" autoSize={true}/>}</ReachableContext.Consumer>
  ),
};

const About = () => {
  const [modal, contextHolder] = Modal.useModal();

  return (
    <ReachableContext.Provider value={items_about[0].title}>
      <section id="about">
        <Row>
          <Col {...leftLayout} align='center'>
            <img className="avatar-layout" src="http://gogs.hope.com/avatars/6?s=287" />
            <Title level={4} className="name">Andrey S.</Title>
          </Col>
          <Col {...rightLayout}>
            <Space align='top'>
              <Title level={3}>{items_about[0].title}</Title>
              <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                modal.confirm(modalEditTitle);
              }} />
            </Space>

            <Space align='top'>
              <div>{items_about[0].content}</div>
              <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                modal.confirm(modalEditOverview);
              }} />
            </Space>
          </Col>
        </Row>
      </section>

      {contextHolder}
    </ReachableContext.Provider>
  )
}

const Resume = () => {
  return (
    <section id="resume">
      <div className='work'>
        <Row>
          <Col {...leftLayout} align='center'>
            <Title level={3}>Work history</Title>
          </Col>
          <Col {...rightLayout}>
            {items_workhistory.map((item) => (
              <div class="work">
                <Title level={4}>{item.name}</Title>
                <Rate className="workhistory_star" value={item.score} disabled allowHalf />
                <div className="date">{item.date}</div>
                <div>{item.review}</div>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <div className='education'>
        <Row>
          <Col {...leftLayout} align='center'>
            <Title level={3}>Education</Title>
          </Col>
          <Col {...rightLayout}>
            {items_education.map((item) => (
              <div class="education">
                <Space align='top'>
                  <Title level={4}>{item.name}</Title>
                  <Button shape="circle" icon={<EditOutlined />} />
                </Space>
                <div className="date">{item.date}</div>
                <div>{item.degree}</div>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <div className='employment'>
        <Row>
          <Col {...leftLayout} align='center'>
            <Title level={3}>Employment history</Title>
          </Col>
          <Col {...rightLayout}>
            {items_employment.map((item) => (
              <div class="employment">
                <Space align='top'>
                  <Title level={4}>{item.company}</Title>
                  <Button shape="circle" icon={<EditOutlined />} />
                </Space>
                <div className="info">{item.title}<span>&bull;</span> <em className="date">{item.date}</em></div>
                <div>{item.description}</div>
              </div>
            ))}
          </Col>
        </Row>
      </div>

      <Row>
        <Col {...leftLayout} align='center'>
          <Title level={3}>Skills</Title>
        </Col>
        <Col {...rightLayout}>
          <Space align='top'>
            <Row>
              {items_skills.map((item) => (
                <Tag className="skill_item" color="#aaa">{item}</Tag>
              ))}
            </Row>
            <Button shape="circle" icon={<EditOutlined />} />
          </Space>
        </Col>
      </Row>
    </section>
  )
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Row align='center'>
        <Space align='top'>
          <Title level={3} align="">Portfolio</Title>
          <Button shape="circle" icon={<EditOutlined />} />
        </Space>
      </Row>

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
                          <Title level={5}>{item.title}</Title>
                          <Title level={5}>{item.content}</Title>
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
    <div className="page-profile">
      <About />
      <Resume />
      <Portfolio />
    </div>
  )
}

export default Profile