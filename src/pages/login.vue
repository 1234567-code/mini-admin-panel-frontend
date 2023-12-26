<template>
<div class="form-form-wrapper">
<form v-on:submit.prevent="login">
  <h1>login</h1>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
    <router-link to="/register">
        <a class="nav-link" href="#">Register</a>
    </router-link>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>
<style>
.form-form-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>

<script>
export default {
    data(){
        return {
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
        async login() {
          await this.$store.dispatch('login',{email:this.email,password:this.password});
        }
    }
    
    
}
</script>