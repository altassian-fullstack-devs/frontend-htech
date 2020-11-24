import { ROOT_PATH } from 'constants/paths'
import { Home } from 'containers/pages/public'
import { NotFoundRedirector } from 'components/redirector'

const routes = () => [
  {
    path: ROOT_PATH,
    exact: true,
    component: Home
  },
  { component: NotFoundRedirector }
]

export default routes