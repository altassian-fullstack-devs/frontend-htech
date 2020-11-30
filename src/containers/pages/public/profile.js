import React, { useEffect, useMemo, useState } from 'react'
import { connect } from 'react-redux'
import { Col, Row, Typography, Button, Space, Modal, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { useRouteMatch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import merge from 'lodash/merge'
import pick from 'lodash/pick'
import { loadUser } from 'store/actions/accounts'

import { getProfile } from 'store/selectors/developer'
import { avatarURL } from 'utils/url'
import { getSelectedUser } from 'store/selectors/accounts'
import Resume from 'components/profile/resume'


const items_about = [
  {
    title: 'Full-Stack Mobile Expert',
    content: 'Hello, My name is Andrey and I am a top-skilled mobile software expert with 2+ years of experience. My main occupation is React Native and Flutter. I have done several projects with Flutter, Android Native, React-Native, Cocos2d and Swift. I am currently looking for an opportunity to showcase my ability for bulding and maintaining mobile apps.'
  },
]

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

const About = ({
  user,
  profile
}) => {
  const [modal, contextHolder] = Modal.useModal();

  
  const { hourly_rate, skills, overview, title } = merge({}, {
    'hourly_rate': 25,
    'skills': '',
    'overview': '',
    'title': ''
  },
  pick(profile, [
    'hourly_rate',
    'skills',
    'overview',
    'title'
  ]))

  const { avatar, name } = pick(user, [
    'avatar',
    'name'
  ])

  return (
    <ReachableContext.Provider value={items_about[0].title}>
      <section id="about">
        <Row>
          <Col {...leftLayout} align='center'>
            <img className="avatar-layout" src={avatarURL(avatar)} />
            <Title level={4} className="name">{name}</Title>
          </Col>
          <Col {...rightLayout}>
            <Space align='top'>
              <Title level={3}>{title}</Title>
              <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                modal.confirm(modalEditTitle);
              }} />
            </Space>

            <Space align='top'>
              <div>{overview}</div>
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

const Profile = ({
  user,
  profile,
  loadUser
}) => {
  const match = useRouteMatch()

  useEffect(() => {
    match && loadUser(match.params.id)
  }, [match])

  return (
    <div className="page-profile">
      <About user={user} profile={profile}/>
      <Resume />
      <Portfolio />
    </div>
  )
}

export default connect(
  createStructuredSelector({
    user: getSelectedUser,
    profile: getProfile,
  }),
  {
    loadUser
  }
)(Profile)