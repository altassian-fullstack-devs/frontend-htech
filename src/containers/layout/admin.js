import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Admin = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Admin.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Admin