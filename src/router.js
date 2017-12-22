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
        component: (resolve) => require(['./views/upload.vue'], resolve)
    }
];
export default routers;