import App from 'app'
import { Common, Developer, Client, Admin, Root, Auth } from 'containers/layout'
import { ADMIN_ROOT, AUTH_ROOT, CLIENT_ROOT, DEVELOPER_ROOT, ROOT_PATH } from 'constants/paths'
import { USER_TYPES } from 'constants/types'
import publicRoutes from './public'
import authRoutes from './auth'
import adminRoutes from './admin'
import developerRoutes from './developer'
import clientRoutes from './client'


const routesForType = viewer => ({
    [USER_TYPES.admin]: [
        {
            path: ADMIN_ROOT,
            component: Admin,
            routes: adminRoutes(viewer),
        },
    ],
    [USER_TYPES.developer]: [
        {
            path: DEVELOPER_ROOT,
            component: Developer,
            routes: developerRoutes(viewer)
        }
    ],
    [USER_TYPES.client]: [
        {
            path: CLIENT_ROOT,
            component: Client,
            routes: clientRoutes(viewer)
        }
    ]
})

const routes = viewer => {
    let viewerRouters = []

    if (viewer.isAuthenticated) {
        viewerRouters = routesForType(viewer)[viewer.type]    
    }

    const allRoutes = [
        ...viewerRouters,
        {
            path: AUTH_ROOT,
            component: Auth,
            routes: authRoutes(viewer)
        },
        {
            path: ROOT_PATH,
            component: Root,
            routes: publicRoutes()
        }
    ]

    return [
        {
            component: Root,
            routes: allRoutes
        }
    ]
}

export default routes