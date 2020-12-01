import React from 'react'
import { Col, Row, Button, Space, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'

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

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const { Title } = Typography

const Education = ({
  education
}) => (
  <div class="education">
    <Space align='top'>
      <Title level={4}>{education.name}</Title>
      <Button shape="circle" icon={<EditOutlined />} />
    </Space>
    <div className="date">{education.date}</div>
    <div>{education.degree}</div>
  </div>
)

export default ({

}) => (
  <div className='education'>
    <Row>
      <Col {...leftLayout} align='center'>
        <Title level={3}>Education</Title>
      </Col>
      <Col {...rightLayout}>
        {items_education.map((item) => (<Education education={item}/>))}
      </Col>
    </Row>
  </div>
)