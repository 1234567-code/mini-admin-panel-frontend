<template>
<div class="register-form-wrapper">
<form v-on:submit.prevent="register">
  <h1>Register</h1>
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="text" v-model="name" class="form-control" id="exampleInputName1">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3">
    <label for="exampleInputConfirmPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputConfirmPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    <router-link to="/login">
        <a class="nav-link" href="#">Login</a>
    </router-link>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<style>
.register-form-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>

<script>
export default {
    data(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    mounted() {
    },
    created() {
    },
    computed: {
    },
    methods: {
        async register() {
          await this.$store.dispatch('register',{name:this.name, email:this.email,password:this.password});
        }
    }
    
    
}
</script>