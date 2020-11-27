import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

export const ROOT_PATH = '/'
export const ADMIN_ROOT = `${ROOT_PATH}admin/`
export const DEVELOPER_ROOT = `${ROOT_PATH}d/`
export const CLIENT_ROOT = `${ROOT_PATH}c/`
export const AUTH_ROOT = `${ROOT_PATH}auth/`

export const PUBLIC_PATHS = {
    HOW_WE_WORK: `${ROOT_PATH}how-we-work`,
    DEVELOPERS: `${ROOT_PATH}developers`,
    BLOG: `${ROOT_PATH}blog`,
    PROFILE: `${ROOT_PATH}profile`,
    BLOG_DETAIL :`${ROOT_PATH}blog-detail`,
    PORTFOLIO: `${ROOT_PATH}portfolio`,
    GALLERY_DETAIL : `${ROOT_PATH}gallery-detail`,
    ABOUT_US: `${ROOT_PATH}about-us`,
    NOT_FOUND: `${ROOT_PATH}page-404`,
}

export const AUTH_PATHS = {
    SIGN_IN: `${AUTH_ROOT}sign-in`,
    SIGN_UP: `${AUTH_ROOT}sign-up`,
}

export const ADMIN_PATHS = {
    BLOGS: `${ADMIN_ROOT}blogs`,
    PORTFOLIOS: `${ADMIN_ROOT}portfolios`,
    CLIENTS: `${ADMIN_ROOT}clients`,
    DEVELOPERS: `${ADMIN_ROOT}developers`
}

export const DEVELOPER_PATHS = {
    MY_JOBS: `${DEVELOPER_ROOT}my-jobs`,
    REPORTS: `${DEVELOPER_ROOT}reports`,
    MESSAGES: `${DEVELOPER_ROOT}messages`
}

export const CLIENT_PATHS = {
    MY_JOBS: `${CLIENT_ROOT}my-jobs`,
    REPORTS: `${CLIENT_ROOT}reports`,
    MESSAGES: `${CLIENT_ROOT}messages`
}