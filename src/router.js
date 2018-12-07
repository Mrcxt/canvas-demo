import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                visible: true
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/About.vue'),
            meta: {
                visible: true,
            },
            children: [{
                path: 'hello',
                name: 'hello',
                component: () =>
                    import ( /* webpackChunkName: "about" */ './components/HelloWorld'),
                meta: {
                    visible: false,
                },
            }]
        }
    ]
})