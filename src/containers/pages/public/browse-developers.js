
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { Layout, Collapse, Typography, List, Avatar, Row, Col, Pagination } from 'antd'
import { useHistory } from 'react-router-dom'

import { loadUsers } from 'store/actions/accounts'
import { changePage, changePageSize, updateFilterForm } from 'store/actions/ui'
import { getCurrentPage, getFilterForm } from 'store/selectors/ui'
import { getIsLoadedUsers, getIsLoadingUsers, getTotal, getUsers } from 'store/selectors/accounts'

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

const BrowseDevelopers = ({
  filters,
  page,
  isLoaded,
  isLoading,
  developers,
  total,
  loadUsers,
  changePage,
  changePageSize,
  updateFilterForm,
}) => {
  const history = useHistory()

  useEffect(() => {
    loadUsers()
  }, [])

  const onChangePage = (page) => {
    changePage('developers', page)
  }

  const onClickItem = item => {
    history.push('/profile')
  }

  return (
    <div className="page-browse-developers">
      <Layout>
        <SideFilter />
        <Content className="browse-developers-content">
          <List
            itemLayout="horizontal"
            dataSource={developers}
            renderItem={item => (
              <List.Item 
                className='list-item-developer'
                onClick={() => onClickItem(item)}
              >
                <Row align='middle' className='row-title'>
                  <Avatar src={item.avatar} size='large' />
                  <Col style={{ marginLeft: 20}} >
                    <Row className='title-name'>{item.name}</Row>
                    <Row>{item.profile.title}</Row>
                  </Col>
                </Row>
                <Row justify="space-between" style={{ marginTop: 10, paddingRight: 20 }}>
                  <Col>$<strong>{item.profile.hourly_rate.toFixed(2)}</strong> / hr</Col>
                  <Col>$<strong>{item.total_earning}</strong> earned</Col>
                  <Col>100% Job Success</Col>
                </Row>
                <Row style={{ marginTop: 15 }}>{item.profile.overview}</Row>
                {/* <Row style={{ marginTop: 10, color: 'grey' }}>{item.skills.join(' • ')}</Row> */}
              </List.Item>
            )}
          />
          <Row className='pagination-container' align='end'>
            <Pagination
              showSizeChanger={false}
              size='small'
              onChange={onChangePage} 
              defaultCurrent={1} 
              total={total} />
          </Row>
        </Content>
      </Layout>
    </div>
  )
}

export default connect(
  createStructuredSelector({
    filters: getFilterForm('developers'),
    page: getCurrentPage('developers'),
    developers: getUsers,
    total: getTotal,
    isLoading: getIsLoadingUsers,
    isLoaded: getIsLoadedUsers
  }),
  {
    loadUsers,
    changePage,
    changePageSize,
    updateFilterForm
  }
)(BrowseDevelopers)