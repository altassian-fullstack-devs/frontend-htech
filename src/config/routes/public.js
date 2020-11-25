import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { Home, Blog, Portfolio, HowWeWork, AboutUs, Profile, BrowseDevelopers } from 'containers/pages/public'
import { NotFoundRedirector } from 'components/redirector'

const routes = () => [
  {
    path: ROOT_PATH,
    exact: true,
    component: Home
  },
  {
    path: PUBLIC_PATHS.HOW_WE_WORK,
    exact: true,
    component: HowWeWork
  },
  {
    path: PUBLIC_PATHS.DEVELOPERS,
    exact: true,
    component: BrowseDevelopers
  },
  {
    path: PUBLIC_PATHS.PORTFOLIO,
    exact: true,
    component: Portfolio
  },
  {
    path: PUBLIC_PATHS.BLOG,
    exact: true,
    component: Blog
  },
  {
    path: PUBLIC_PATHS.ABOUT_US,
    exact: true,
    component: AboutUs
  },
  {
    path: PUBLIC_PATHS.PROFILE,
    exact: true,
    component: Profile
  },
  { component: NotFoundRedirector }
]

export default routes