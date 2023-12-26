import {createRouter, createWebHistory} from 'vue-router';
import login from '../pages/login.vue';
import register from '../pages/register.vue';
import adminPanel from '../pages/admin-panel.vue';
import allCompanies from '../components/all-companies.vue';
import createCompany from '../components/create-company.vue';
import update from '../components/update.vue';
import allEmployees from '../components/employee/all-employees.vue';
import createEmployee from '../components/employee/create.vue';
import updateEmployee from '../components/employee/update.vue';

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: login,
    },
    {
    path: '/register',
    name: 'Register',
    component: register,

    },
    {
    path: '/admin-panel',
    name: 'AdminPanel',
    component: adminPanel,
    meta: { requiresAuth: true },
    children: [
        {
            path: '/company/all',
            name: 'AllCompanies',
            component: allCompanies,
            Props:true,
        },
        {
            path: '/company/create',
            name: 'CreateCompany',
            component: createCompany,
            Props:true,
        },
        {
            path: '/company/update/:companyData',
            name: 'UpdateCompany',
            component: update,
            Props:true,
        },
        {
            path: '/employee/all',
            name: 'AllEmployees',
            component: allEmployees,
            Props:true,
        },
        {
            path: '/employee/update/:employeeData',
            name: 'UpdateEmployee',
            component: updateEmployee,
            Props:true,
        },
        {
            path: '/employee/create',
            name: 'CreateEmployee',
            component: createEmployee,
            Props:true,
        },
    ]

    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (to.path === '/admin-panel' && !isAuthenticated) {
        router.push({name: 'Login'});
    } else {
      next();
    }
  });
export default router;



