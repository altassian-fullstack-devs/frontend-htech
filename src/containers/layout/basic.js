import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Basic = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Basic.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Basic