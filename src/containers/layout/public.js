import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Public = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Public.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Public