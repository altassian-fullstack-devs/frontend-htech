import React from 'react'
import { Col, Row, Tag, Rate, Typography, Button, Space, Input, Popconfirm } from 'antd'
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons'

const data = {
  name: 'Ricardo G.',
  avatar: 'http://gogs.hope.com/avatars/6?s=287',
  title: 'Cartoonist/Caricaturist/Illustrator',
  rate: 60,
  earning: 100000,
  overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
  skills: [
    'Comit Art',
    'Digital Painting',
    'Illustrations',
    'Caricature Drawing',
    'Jewelry Design',
    '3D Modeling',
    'Interior Design'
  ],
  workhistory: [
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
  ],
  education: [
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
  ],
  employment: [
    {
      company: 'Exadel, Inc',
      title: 'Software Engineer',
      date: 'Sep 2018 - Feb 2019',
      description: 'Exadel was a great company which you might hope to work in. But I had some free time and I really wanna do nothing except coding that time. And I am out of that company. So I\'d like to find a chance to improve my skill and earn extra cash on Upwork.'
    }
  ],
  portfolio: [
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
}

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

const onWorkHistoryDelete = (index) => {
  console.log("hey"+index);
}

const About = () => {
  return (
    <section id="about">
      <Row>
        <Col {...leftLayout} align='center'>
          <div>
            <img className="avatar-layout" src={data.avatar} />
          </div>
          <Input className="input-name" defaultValue={data.name} />

          <Row className="hourlyrate-container" align='center'>
            <div>$</div><Input className="input-hourlyrate" defaultValue={data.rate} /><div>/hr</div>
          </Row>
        </Col>
        <Col {...rightLayout}>
          <Title level={5}>Title</Title>
          <Input defaultValue={data.title} />
          <Title style={{marginTop: 10}} level={5}>Overview</Title>
          <TextArea defaultValue={data.overview} rows={6} autoSize={false} />          
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
            <Title level={3}>Work history</Title>
          </Col>
          <Col {...rightLayout}>
            {data.workhistory.map((item, idx) => (
              <div class="work">
                <Row>
                  <Title level={4}>{item.name}</Title>

                  <Popconfirm title="Sure to delete?" onConfirm={() => onWorkHistoryDelete(idx)} >
                    <Button style={{marginLeft: 10}} shape="circle" icon={<DeleteOutlined />} />
                  </Popconfirm>
                </Row>
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
            <Row align='center'>
              <Title level={3}>Education</Title>
              <Button style={{marginLeft: 10}} shape="circle" icon={<PlusOutlined />} onClick={() => {
                
              }} />
            </Row>
          </Col>
          <Col {...rightLayout}>
            {data.education.map((item) => (
              <div class="education">
                <Space align='top'>
                  <Title level={4}>{item.name}</Title>
                  <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                    
                  }} />
                  <Button style={{marginLeft: 10}} shape="circle" icon={<DeleteOutlined />} onClick={() => {
                    
                  }} />
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
            <Row align='center'>
              <Title level={3}>Employment history</Title>
              <Button style={{marginLeft: 10}} shape="circle" icon={<PlusOutlined />} onClick={() => {
                
              }} />
            </Row>
          </Col>
          <Col {...rightLayout}>
            {data.employment.map((item) => (
              <div class="employment">
                <Space align='top'>
                  <Title level={4}>{item.company}</Title>
                  <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                    
                  }} />
                  <Button style={{marginLeft: 10}} shape="circle" icon={<DeleteOutlined />} onClick={() => {
                    
                  }} />
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
              {data.skills.map((item) => (
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
            {data.portfolio.map((item) => (
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

const Developer = () => {
  return (
    <div className="page-admin-developer-profile">
      <About />
      <Resume />
      <Portfolio />
    </div>
  )
}

export default Developer