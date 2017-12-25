const routers = [{
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/upload',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/show.vue'], resolve)
    }
];
export default routers;