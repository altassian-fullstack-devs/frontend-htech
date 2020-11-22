import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { Home } from 'containers/pages/public'
import { Common, NotFound } from 'containers/layout'

const routes = () => [
    {
        path: ROOT_PATH,
        component: Common,
        routes: [
            {
                path: ROOT_PATH,
                exact: true,
                component: Home
            }, 
        ]
    },
    { component: NotFound },
]

export default routes