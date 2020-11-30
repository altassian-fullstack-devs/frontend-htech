import React from 'react'
import { Col, Row, Typography, Button, Space } from 'antd'
import { EditOutlined } from '@ant-design/icons'

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

const portfolioLayout = {
  md: { span:8 },
  xs: { span:24 }
}

const { Title } = Typography


export default ({

}) => {
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