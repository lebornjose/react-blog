
import React from 'react';
import App from '../App'
import Home from '../components/home'
import Cat from '../components/cat'
import Category from '../components/category'

const config = [
    {
        name: '/',
        path: '/',
        component: App,
        indexRoute: { component:  Home},
    },
    {
        name: 'home',
        path: '/home',
        component: Home,
        indexRoute: { component:  Home},
    },
    {
        name: 'cat',
        path: '/cat',
        component: Cat,
        childRoutes: [
            { path: '/category', component: Category },
        ]
    }
]

export default config;