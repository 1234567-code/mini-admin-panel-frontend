<template>
    <div class="admin-panel-wrapper">
        <div class="sidebar">
            <ul class="list-items">
                <router-link to="/company/all">
                    <li class="list-item">Companies</li>
                </router-link>
                <router-link to="/employee/all">
                    <li class="list-item">Employees</li>
                </router-link>
                <li @click="logout" class="list-item">logout</li>
            </ul>
        </div>
        <div class="main-content"><router-view></router-view></div>
    </div>
</template>
<style>
.admin-panel-wrapper {
    display: flex;
    width: 100%;
}
.sidebar {
    width: 260px;
    height: 100vh;
    background-color: rgb(61, 61, 151);
    color: white;
    padding: 30px 20px;
}
.list-items {
    margin-left: -20px;
}

.list-item {
    list-style: none;
    margin-bottom: 20px;
    cursor: pointer;
}
.main-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
<script>
import router from '../router/router';
export default {

    data(){
        return {
            
        }
    },
    mounted() {
    },
    created() {
        this.routeToCompanies();
    },
    computed: {
    },
    methods: {
        routeToCompanies(){
            router.push({name: 'AllCompanies'});
        },
        logout(){
            this.$store.dispatch('logout');
        }
    }
    
    
}
</script>