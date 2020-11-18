import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Client = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Client.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Client