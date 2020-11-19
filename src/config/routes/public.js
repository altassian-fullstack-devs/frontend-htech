import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { Portfolio, Blog, Post, Contact, Team, Profile, Services, Home } from 'containers/pages/public'
import BlogSingle from 'components/blog/blog-single'
import { Common, NotFound } from 'containers/layout'
import GalleryItemDetail from 'components/portfolio/gallery-item-detail'


const routes = () => [
    {
        path: PUBLIC_PATHS.PORTFOLIO_DETAIL,
        component: GalleryItemDetail,
        exact: true,
    },
    {
        path: ROOT_PATH,
        component: Common,
        routes: [
            {
                path: ROOT_PATH,
                exact: true,
                component: Home
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
                path: PUBLIC_PATHS.BLOGDETAIL,
                exact: true,
                component: BlogSingle
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
            {
                path: PUBLIC_PATHS.SERVICES,
                exact: true,
                component: Services
            },
        ]
    },
    { component: NotFound },
]

export default routes