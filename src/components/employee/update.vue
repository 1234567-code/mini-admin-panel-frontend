<template>
    <div class="form-wrapper">
    <form v-on:submit.prevent="updateEmployee">
      <div class="mb-3">
        <label for="exampleInputFirstName1" class="form-label">First Name</label>
        <input type="text" v-model="first_name" class="form-control" id="exampleInputFirstName1">
      </div>
      <div class="mb-3">
        <label for="exampleInputLastName1" class="form-label">Last Name</label>
        <input type="text" v-model="last_name" class="form-control" id="exampleInputLastName1">
      </div>
      <div class="mb-3">
        <label for="exampleInputCompanyId1" class="form-label">Company Id</label>
        <input type="integer" v-model="company_id" class="form-control" id="exampleInputCompanyId1">
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPhone1" class="form-label">Phone</label>
        <input type="text" v-model="phone" class="form-control" id="exampleInputPhone1">
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
    </template>
    
    <script>
    export default {
        data(){
            return {
                first_name: '',
                last_name: '',
                company_id: '',
                email: '',
                phone: '',
                employee: {}
            }
        },
        mounted() {
        },
        created() {
            this.employeeData();
        },
        computed: {
        },
        methods: {
            async updateEmployee() {
                const formData = new FormData();
                formData.append('id',this.employee.id);
                formData.append('first_name', this.first_name);
                formData.append('last_name', this.last_name);
                formData.append('company_id', this.company_id);
                formData.append('email', this.email);
                formData.append('phone', this.phone);
                await this.$store.dispatch('updateEmployee', formData, formData.id);
            },
            employeeData(){
                this.employee = this.$store.state.employees.find(employee => employee.id === parseInt(this.$route.params.employeeData));
                this.first_name = this.employee.first_name;
                this.last_name = this.employee.last_name;
                this.company_id = this.employee.company_id;
                this.email = this.employee.email;
                this.phone = this.employee.phone;
            }
    
        }
        
        
    }
    </script>