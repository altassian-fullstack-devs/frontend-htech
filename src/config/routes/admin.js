import { ADMIN_PATHS } from 'constants/paths'
import { Clients, Developers } from 'containers/pages/admin'

const routes = () => [
  {
    path: ADMIN_PATHS.CLIENTS,
    extract: true,
    component: Clients
  },
  {
    path: ADMIN_PATHS.DEVELOPERS,
    extract: true,
    component: Developers
  },
]

export default routes