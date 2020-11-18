import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Common = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Common.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Common