import { AUTH_PATHS } from 'constants/paths'
import { SignIn, SignUp } from 'containers/pages/auth'

import { AuthorizedRedirector, NotFoundRedirector } from 'components/redirector'

const redirectAuthorized = viewer => component =>
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
  { component: NotFoundRedirector }
]

export default routes
