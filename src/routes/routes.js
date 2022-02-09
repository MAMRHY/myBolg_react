import Home from "../views/Home";
import Life from "../views/Life";
import Tech from "../views/Technology"
import About from "../views/About"
import Articles from "../views/articles";


import ViewNotFind from "../views/viewNotFind";


export const routes = [
    {
        path: '/',
        component:Home
    },
    {
        path: '/life',
        component: Life
    },
    {
        path: '/tech',
        component: Tech
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/article/:id',
        component: Articles
    },
    {
        path: '/404',
        component: ViewNotFind
    }
]