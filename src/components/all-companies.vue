<template>
<div class="table-wrapper">
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Edit/Delete</th>
    </tr>
  </thead>
  <tbody v-if="this.$store.state.companies && this.$store.state.companies !== null">
        <tr v-for="company in this.$store.state.companies" :key="company.id">
            <td>{{company.id}}</td>
            <td>{{company.name}}</td>
            <td>{{company.email}}</td>
            <td>{{company.website}}</td>
            <td class="icons"><router-link :to="{ name: 'UpdateCompany', params: { companyData: company.id }}" ><button>
              <i class="fas fa-edit edit"></i>
            </button></router-link>
            <button v-on:click="removeCompany(company.id)">
              <i class="fas fa-trash delete"></i>
            </button></td>
        </tr>
  </tbody>
</table>
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li :class="{ 'disabled': this.$store.state.companyPagination.current_page === 1 }" class="page-item">
      <a @click="getPaginatedCompanies(this.$store.state.companyPagination.current_page -1)" class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="index in this.$store.state.companyPagination.last_page" class="page-item" :class="{ 'active': this.$store.state.companyPagination.current_page === index }">
      <a @click="getPaginatedCompanies(index)" class="page-link" href="#">{{ index }}</a>
  </li>
    <li :class="{ 'disabled': this.$store.state.companyPagination.current_page === this.$store.state.companyPagination.last_page }" class="page-item">
      <a @click="getPaginatedCompanies(this.$store.state.companyPagination.current_page + 1)" class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
<div class="button-wrapper">
    <router-link to="/company/create">
        <button class="add-company-button" type="button" name="addNewCompany">Add New Company</button>
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
.add-company-button {
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
        this.getCompanies();
    },
    computed: {
    },
    methods: {
        async getCompanies() {
          await this.$store.dispatch('getCompanies');
        },
        async getPaginatedCompanies(page) {
          await this.$store.dispatch('getPaginatedCompanies',page);
        },
        async removeCompany(id) {
          await this.$store.dispatch('removeCompany',id);
        }
    }
    
    
}
</script>