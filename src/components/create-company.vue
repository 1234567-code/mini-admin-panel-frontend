<template>
<div class="form-wrapper">
<form v-on:submit.prevent="createCompany">
  <div class="mb-3">
    <label for="exampleInputName1" class="form-label">Name</label>
    <input type="text" v-model="name" class="form-control" id="exampleInputName1">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3">
    <label for="exampleInputLogo1" class="form-label">Logo</label>
    <input type="file" @change="handleFileUpload" class="form-control" id="exampleInputLogo1">
  </div>
  <div class="mb-3">
    <label for="exampleInputWebsite1" class="form-label">Website</label>
    <input type="text" v-model="website" class="form-control" id="exampleInputWebsite1">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>

<script>
export default {
    data(){
        return {
            name: '',
            email: '',
            logo: '',
            website: ''
        }
    },
    mounted() {
    },
    created() {
    },
    computed: {
    },
    methods: {
        async createCompany() {
            const formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('logo', this.logo);
            formData.append('website', this.website);
            await this.$store.dispatch('createCompany', formData);
        },
        handleFileUpload(event) {
            this.logo = event.target.files[0];
        }

    }
    
    
}
</script>