import React from 'react'
import { List, Avatar, Row, Col } from 'antd'
import { avatarURL } from 'utils/url'
import pick from 'lodash/pick'
import merge from 'lodash/merge'
import get from 'lodash/get'
import { decorateSkills } from 'utils/string'

export default ({ 
  item,
  onClickItem 
}) => {
  const {
    id,
    name,
    avatar,
    total_earning,
  } = item
  
  const profile = merge({}, {
    'hourly_rate': 25,
    'skills': '',
    'overview': '',
    'title': ''
  },
  pick(get(item, 'profile', {}), [
    'hourly_rate',
    'skills',
    'overview',
    'title'
  ]))
  
  return (
    <List.Item 
      className='list-item-developer'
      onClick={() => onClickItem(id)}
    >
      <Row align='middle' className='row-title'>
        <Avatar src={avatarURL(avatar)} size='large' />
        <Col style={{ marginLeft: 20}} >
          <Row className='title-name'>{name}</Row>
          <Row>{profile.title}</Row>
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: 10, paddingRight: 20 }}>
        <Col>$<strong>{profile.hourly_rate.toFixed(2)}</strong> / hr</Col>
        <Col>$<strong>{total_earning}</strong> earned</Col>
        <Col>100% Job Success</Col>
      </Row>
      <Row style={{ marginTop: 15 }}>{profile.overview}</Row>
      <Row style={{ marginTop: 10, color: 'grey' }}>{decorateSkills(profile.skills)}</Row>
    </List.Item>
  )
}