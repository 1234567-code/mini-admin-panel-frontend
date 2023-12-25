<template>
    <div class="form-wrapper">
    <form v-on:submit.prevent="createEmployee">
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
            }
        },
        mounted() {
        },
        created() {
        },
        computed: {
        },
        methods: {
            async createEmployee() {
                const formData = new FormData();
                formData.append('first_name', this.first_name);
                formData.append('last_name', this.last_name);
                formData.append('company_id', this.company_id);
                formData.append('email', this.email);
                formData.append('phone', this.phone);
                await this.$store.dispatch('createEmployee', formData);
            },
    
        }
        
        
    }
    </script>