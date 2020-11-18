import { PUBLIC_PATHS } from 'constants/paths'
import { Portfolio, Blog, Post, Contact, Team, Profile } from 'containers/pages/public'
import { NotFound } from 'containers/layout'

const routes = () => [
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
        path: PUBLIC_PATHS.POST,
        exact: true,
        component: Post
    },
    {
        path: PUBLIC_PATHS.CONTACT,
        exact: true,
        component: Contact
    },
    {
        path: PUBLIC_PATHS.TEAM,
        exact: true,
        component: Team
    },
    {
        path: PUBLIC_PATHS.PROFILE,
        exact: true,
        component: Profile
    },
    { component: NotFound },
]

export default routes