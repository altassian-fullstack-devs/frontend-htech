import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { useHistory } from 'react-router-dom'
import { Layout, List, Row, Pagination } from 'antd'

import { loadUsers } from 'store/actions/accounts'
import { changePage, changePageSize, updateFilterForm } from 'store/actions/ui'
import { getCurrentPage, getFilterForm } from 'store/selectors/ui'
import { getIsLoadedUsers, getIsLoadingUsers, getTotal, getUsers } from 'store/selectors/accounts'

import { FixedWidthLayout } from 'containers/layout'
import SideFilter from 'components/developers/side-filter'
import SkeletonItem from 'components/developers/skeleton-item'
import DeveloperItem from 'components/developers/developer-item'

const { Content } = Layout

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

  const onClickItem = (id) => {
    history.push('/profile')
  }

  return (
    <FixedWidthLayout className="page-browse-developers">
      <Layout>
        <SideFilter />
        <Content className="browse-developers-content">
          <List
            itemLayout="horizontal"
            dataSource={isLoaded ? new Array(10).fill(0) : developers}
            renderItem={item => (isLoaded ? <SkeletonItem/> : <DeveloperItem item={item} onClickItem={onClickItem}/>)}
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
    </FixedWidthLayout>
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
