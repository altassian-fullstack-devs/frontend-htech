import { Redirect } from 'react-router'
import { AUTH_PATHS, ROOT_PATH } from 'constants/paths'
import { SignIn, SignUp } from 'containers/pages/auth'
import { NotFound } from 'containers/layout'

const AuthorizedRedirector = () => <Redirect to={ROOT_PATH} />
export const redirectAuthorized = viewer => component =>
  viewer.isAuthenticated ? AuthorizedRedirector : component

const routes = viewer => [
  {
    path: AUTH_PATHS.SIGN_IN,
    exact: true,
    component: redirectAuthorized(viewer)(SignIn),
  },
  {
    path: AUTH_PATHS.SIGN_UP,
    exact: true,
    component: redirectAuthorized(viewer)(SignUp),
  },
  { component: NotFound },
]

export default routes
