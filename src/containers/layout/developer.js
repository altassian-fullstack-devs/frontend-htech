import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu } from 'antd'

import { NavBar, Footer } from 'components/common'
import { DEVELOPER_PATHS, PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

const popOverContent = (
  <div>
    <p><Link to={PUBLIC_PATHS.PROFILE}>Profile</Link></p>
    <p><Link to={ROOT_PATH}>Sign out</Link></p>
  </div>
);

const Developer = ({ route }) => (
  <Layout>
    <NavBar popOverContent={popOverContent}>
      <Menu.Item key={DEVELOPER_PATHS.MY_JOBS}>
        <Link to={DEVELOPER_PATHS.MY_JOBS}>MY JOBS</Link>
      </Menu.Item>
      <Menu.Item key={DEVELOPER_PATHS.REPORTS}>
        <Link to={DEVELOPER_PATHS.REPORTS}>REPORTS</Link>
      </Menu.Item>
      <Menu.Item key={DEVELOPER_PATHS.MESSAGES}>
        <Link to={DEVELOPER_PATHS.MESSAGES}>MESSAGES</Link>
      </Menu.Item>
    </NavBar>

    <Layout.Content className="page-content">
      {renderRoutes(route.routes)}
    </Layout.Content>
      
    <Footer />
  </Layout>
)

Developer.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Developer