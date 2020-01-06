import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: "/applicants",
            name: "applicants",
            component: () => import("../views/Applicants.vue")
        },
        {
            path: "/employees",
            name: "employees",
            component: () => import("../views/Employees.vue")
        },
        {
            path: "/teams",
            name: "teams",
            component: () => import("../views/Teams.vue")
        },
        {
            path: "/districts",
            name: "districts",
            component: () => import("../views/Districts.vue")
        },
        {
            path: "/departments",
            name: "departments",
            component: () => import("../views/Departments.vue")
        },
        {
            path: "/divisions",
            name: "divisions",
            component: () => import("../views/Divisions.vue")
        },
        {
            path: "/company",
            name: "company",
            component: () => import("../views/Company.vue")
        },
        {
            path: '/about',
            name: 'about',
            component: () => import( '../views/About.vue')
        }
    ]
;

const router = new VueRouter({
                                 mode: 'history',
                                 base: process.env.BASE_URL,
                                 routes
                             });

export default router;
