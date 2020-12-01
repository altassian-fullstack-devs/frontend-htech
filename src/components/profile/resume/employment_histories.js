import React from 'react'
import { Col, Row, Button, Space, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const { Title } = Typography

const items_employment = [
  {
    company: 'Exadel, Inc',
    title: 'Software Engineer',
    date: 'Sep 2018 - Feb 2019',
    description: 'Exadel was a great company which you might hope to work in. But I had some free time and I really wanna do nothing except coding that time. And I am out of that company. So I\'d like to find a chance to improve my skill and earn extra cash on Upwork.'
  }
]

export default ({

}) => (
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
)