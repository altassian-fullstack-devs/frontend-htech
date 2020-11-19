import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Auth = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Auth.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Auth