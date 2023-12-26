import vuex from 'vuex';
import axios from 'axios';
//import vue from 'vue';
//vue.use(vuex);
import { createStore } from 'vuex';
import router from '../router/router';

const store =new vuex.Store({
    state: {
        user: {
            name: '',
            companies: [],
            employees: [],
            companyPagination: {},
            employeePagination: {},
            allCompanies: [],
        },
    },

    actions: {
        register({commit}, data) {
            commit('register', data);
        },
        login({commit}, data) {
            commit('login', data);
        },
        getCompanies({commit}) {
            commit('getCompanies');
        },
        getAllCompanies({commit}) {
            commit('getAllCompanies');
        },
        removeCompany({commit}, id) {
            commit('removeCompany', id);
        },
        createCompany({commit}, data) {
            commit('createCompany', data);
        },
        updateCompany({commit}, data, id) {
            commit('updateCompany', data, id);
        },
        getEmployees({commit}) {
            commit('getEmployees');
        },
        removeEmployee({commit}, id) {
            commit('removeEmployee', id);
        },
        updateEmployee({commit}, data, id) {
            commit('updateEmployee', data, id);
        },
        createEmployee({commit}, data) {
            commit('createEmployee', data);
        },
        getPaginatedEmployees({commit}, page) {
            commit('getPaginatedEmployees', page);
        },
        getPaginatedCompanies({commit}, page) {
            commit('getPaginatedCompanies', page);
        },
        logout({commit}) {
            commit('logout');
        },
    },
    
    mutations: {
        async register(state, data) {
            await axios.post('http://localhost:8000/api/register', data).then((response) => {
                state.user.name = response.data.user.name;
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('isAuthenticated', true);
                router.push({name: 'AdminPanel'});
            });
        },
        async login(state, data) {
            await axios.post('http://localhost:8000/api/login', data).then((response) => {
                state.user.name = response.data.user.name;
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('isAuthenticated', true);
                router.push({name: 'AdminPanel'});
            });
        },
        // setUserAccount(state, createUserAccount) {
        //     state.createUserAccount = createUserAccount;
        // },
        async getCompanies(state) {
            await axios.get('http://localhost:8000/api/all-companies', {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                state.companies = response.data.data;
                state.companyPagination = response.data;
            });
        },
        async getPaginatedCompanies(state, page) {
            await axios.get(`http://localhost:8000/api/all-companies/?page=${page}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                state.companies = response.data.data;
                state.companyPagination = response.data;
                console.log(response);
                console.log(state.companyPagination);
            });
        },
        async getAllCompanies(state) {
            await axios.get('http://localhost:8000/api/get-all-companies', {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                state.allCompanies = response.data;
                console.log(response);
            });
        },
        async removeCompany(state,id) {
            await axios.post(`http://localhost:8000/api/company/delete/${id}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                console.log(response);
            });
        },
        // setTeam(state, createTeam) {
        //     state.createTeam = createTeam;
        // },
        async createCompany(state,data) {
            await axios.post('http://localhost:8000/api/company/create', data, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                console.log(response);
                router.push({name: 'AllCompanies'});
            });
        },
        async updateCompany(state, data, id) {
            await axios.post(`http://localhost:8000/api/company/update/${id}`, data, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                console.log(response);
                router.push({name: 'AllCompanies'});
            });
        },
        // },
        // setRole(state, createRole) {
        //     state.createRole = createRole;
        // },
        async getEmployees(state) {
            await axios.get('http://localhost:8000/api/all-employees', {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                state.employees = response.data.data;
                state.employeePagination = response.data;
            });
        },
        async getPaginatedEmployees(state, page) {
            await axios.get(`http://localhost:8000/api/all-employees/?page=${page}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                state.employees = response.data.data;
                state.employeePagination = response.data;
                console.log(response);
            });
        },
        async removeEmployee(state,id) {
            await axios.post(`http://localhost:8000/api/employee/delete/${id}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                console.log("tess");
                console.log(response);
            });
        },
        async updateEmployee(state, data, id) {
            await axios.post(`http://localhost:8000/api/employee/update/${id}`, data, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                console.log(response);
                router.push({name: 'AllEmployees'});
            });
        },
        async createEmployee(state,data) {
            await axios.post('http://localhost:8000/api/employee/create', data, {
                headers:{
                    Authorization: `Bearer ${localStorage.token}`
                }
            }).then((response) => {
                console.log(response);
                router.push({name: 'AllEmployees'});
            });
        },
        logout(state) {
            state.user.name = '';
            localStorage.removeItem('token');
            localStorage.setItem('isAuthenticated', false);
            router.push({name: 'Login'});
        },
        

    },
})

export default store;