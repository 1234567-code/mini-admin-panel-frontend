<template>
    <div class="table-wrapper">
      <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Company</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Edit/Delete</th>
        </tr>
      </thead>
      <tbody v-if="this.$store.state.employees && this.$store.state.employees !== null">
            <tr v-for="employee in this.$store.state.employees" :key="employee.id">
                <td>{{employee.id}}</td>
                <td>{{employee.first_name}}</td>
                <td>{{employee.last_name}}</td>
                <td>{{employee.company_id}}</td>
                <td>{{employee.email}}</td>
                <td>{{employee.phone}}</td>
                <td class="icons"><router-link :to="{ name: 'UpdateEmployee', params: { employeeData: employee.id }}" ><button>
                  <i class="fas fa-edit edit"></i>
                </button></router-link>
                <button v-on:click="removeEmployee(employee.id)">
                  <i class="fas fa-trash delete"></i>
                </button></td>
            </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li :class="{ 'disabled': this.$store.state.employeePagination.current_page === 1 }" class="page-item">
            <a @click="getPaginatedEmployees(this.$store.state.employeePagination.current_page -1)" class="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-for="index in this.$store.state.employeePagination.last_page" class="page-item" :class="{ 'active': this.$store.state.employeePagination.current_page === index }">
            <a @click="getPaginatedEmployees(index)" class="page-link" href="#">{{ index }}</a>
        </li>
          <li :class="{ 'disabled': this.$store.state.employeePagination.current_page === this.$store.state.employeePagination.last_page }" class="page-item">
            <a @click="getPaginatedEmployees(this.$store.state.employeePagination.current_page + 1)" class="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
    </nav>
    <div class="button-wrapper">
        <router-link to="/employee/create">
            <button class="add-employee-button" type="button" name="addNewEmployee">Add New Employee</button>
        </router-link>
    </div>
    </div>
    </template>
    <style>
    .button-wrapper {
        display: flex;
        justify-content: end;
        margin-top: 40px;
    }
    .add-employee-button {
        height: 35px;
        background-color: rgb(58, 58, 156);
        color: white;
        border-radius: 5px;
        border: none;
    }
    .icons {
        display: flex;
        flex-direction: row;
        gap: 5px;
        justify-content: center;
        align-items: center;
    }
    .edit {
        width: 15px;
        height: 25px;
        color: blue;
        border: none;
    }
    .delete {
        width: 15px;
        height: 25px;
        color: red;
        border: none;
    }
    .table-wrapper {
        width: 900px;
    }
    </style>
    <script>
    export default {
        data(){
            return {
                
            }
        },
        mounted() {
        },
        created() {
            this.getEmployees();
        },
        computed: {
        },
        methods: {
            async getEmployees() {
              await this.$store.dispatch('getEmployees');
            },
            async getPaginatedEmployees(page) {
              await this.$store.dispatch('getPaginatedEmployees',page);
            },
            async removeEmployee(id) {
              await this.$store.dispatch('removeEmployee',id);
            }
        }
        
        
    }
    </script>