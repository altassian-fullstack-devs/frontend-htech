
import React from 'react'
import { Layout, Collapse, Typography, List, Avatar, Row, Col, Pagination, Skeleton } from 'antd'
import { useHistory } from 'react-router-dom'

import { FixedWidthLayout } from 'containers/layout'

const { Panel } = Collapse
const { Content, Sider } = Layout
const { Title } = Typography

const SideFilter = () => (
  <Sider width={250} style={{ background: 'transparent' }}>
    <Title className='title-filter' level={4}>Filter By</Title>
    <Collapse 
      bordered={false} 
      expandIconPosition='right' 
      defaultActiveKey={['1']} 
      style={{ background: 'transparent' }}
    >
      <Panel header={<strong>Category</strong>} key="1" >
        <div>Mobile Frontend</div>
        <div>Web Frontend</div>
        <div>Backend</div>
      </Panel>
      <Panel header={<strong>Hourly Rate</strong>} key="2" >
        <div>Below $30/hr</div>
        <div>$30/hr - $50/hr</div>
        <div>$50/hr - $70/hr</div>
        <div>$70/hr - $100/hr</div>
        <div>Above $100/hr</div>
      </Panel>
      <Panel header={<strong>Job Success</strong>} key="3" >
        <div>Above 80%</div>
        <div>Above 90%</div>
      </Panel>
    </Collapse>
  </Sider>
)

const data = [
  {
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
    ]
  },
  {
    name: 'Dakata D.',
    avatar: 'http://gogs.hope.com/avatars/10?s=287',
    title: '3D Artist',
    rate: 70,
    earning: 500000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  },
  {
    name: 'Alexey M.',
    avatar: 'http://gogs.hope.com/avatars/9?s=287',
    title: 'Linux web admin | Ubuntu | VPS | CPanel | Hosting | CMS expert',
    rate: 99.99,
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
    ]
  },
  {
    name: 'Konstantis S.',
    avatar: 'http://gogs.hope.com/avatars/8?s=287',
    title: 'Video, Audio Production, Graphic Design',
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
    ]
  },
  {
    name: 'Alex I.',
    avatar: 'http://gogs.hope.com/avatars/7?s=287',
    title: '2D & 3D Animation, Motion graphic, Video Production',
    rate: 40,
    earning: 300000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  },
  {
    name: 'Eason Chow Wal T.',
    avatar: 'http://gogs.hope.com/avatars/5?s=287',
    title: 'Industrial Designer, Entrepreneur, Innovator, Maker and Thinker',
    rate: 45,
    earning: 20000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  },
  {
    name: 'Claudia D.',
    avatar: 'http://gogs.hope.com/avatars/4?s=287',
    title: 'English/Portuguese Translator & Interpreter',
    rate: 40,
    earning: 15000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  },
  {
    name: 'Karlen S.',
    avatar: 'http://gogs.hope.com/avatars/11?s=287',
    title: 'Master of PS | Photo EDITING and MANIPULATION | High-END Retouching',
    rate: 45,
    earning: 40000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  },
  {
    name: 'Eugen L.',
    avatar: 'http://gogs.hope.com/avatars/3?s=287',
    title: 'Graphic design/Presentation | Pitch deck design/Web design',
    rate: 28,
    earning: 3000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  },
  {
    name: 'Priyanka S.',
    avatar: 'http://gogs.hope.com/avatars/12?s=287',
    title: 'Senior Product/Project Manager',
    rate: 30,
    earning: 20000,
    overview: "20 years of experience in cartoon and caricature creation gives me the skills to meet client's needs. I work in 2 steps: first, a sketch; second - after client approval - digital painting of the sketch.",
    skills: [
      'Comit Art',
      'Digital Painting',
      'Illustrations',
      'Caricature Drawing',
      'Jewelry Design',
      '3D Modeling',
      'Interior Design'
    ]
  }
];

const BrowseDevelopers = () => {
  const history = useHistory()

  const loading = true

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  }

  const onClickItem = item => {
    history.push('/profile')
  }

  const renderDeveloperItem = item => (
    <List.Item 
      className='list-item-developer'
      onClick={() => onClickItem(item)}
    >
      <Row align='middle' className='row-title'>
        <Avatar src={item.avatar} size='large' />
        <Col style={{ marginLeft: 20}} >
          <Row className='title-name'>{item.name}</Row>
          <Row>{item.title}</Row>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: 10, paddingRight: 20 }}>
        <Col>$<strong>{item.rate.toFixed(2)}</strong> / hr</Col>
        <Col>$<strong>{item.earning}</strong> earned</Col>
        <Col>100% Job Success</Col>
      </Row>
      <Row style={{ marginTop: 15 }}>{item.overview}</Row>
      <Row style={{ marginTop: 10, color: 'grey' }}>{item.skills.join(' • ')}</Row>
    </List.Item>
  )

  const renderSkeletonItem = () => (
    <List.Item className='list-item-developer'>
      <Skeleton active avatar />
    </List.Item>
  )

  return (
    <FixedWidthLayout className="page-browse-developers">
      <Layout>
        <SideFilter />
        <Content className="browse-developers-content">
          <List
            dataSource={loading ? new Array(10).fill(0) : data}
            renderItem={loading ? renderSkeletonItem : renderDeveloperItem}
          />
          <Row className='pagination-container' align='end'>
            <Pagination
              showSizeChanger={false}
              size='small'
              onShowSizeChange={onShowSizeChange} 
              defaultCurrent={1} 
              total={80} />
          </Row>
        </Content>
      </Layout>
    </FixedWidthLayout>
  )
}

export default BrowseDevelopers