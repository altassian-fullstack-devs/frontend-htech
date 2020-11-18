import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Developer = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Developer.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Developer