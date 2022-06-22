<template>
  <div class="container">
    <Header title="Search"></Header>
    <form class="form-inline" @submit="Search">
      <SelectInput title="cuisine" :items="this.ddl.cuisine" v-model="form.cuisine" />
      <SelectInput title="diet" :items="this.ddl.diet" v-model="form.diet" />
      <SelectInput title="intolerances" :items="this.ddl.intolerances" v-model="form.intolerances" />
      <SelectInput title="sort" :items="this.ddl.sort" v-model="form.sort" />
      <SelectInput title="sortDirection" :items="this.ddl.sortDirection" v-model="form.sortDirection" />
      <input class="form-control mr-sm-2" type="search" placeholder="Query to search" aria-label="Search"
             v-model="form.query">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    TEST!!!:{{ form }}
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SelectInput from "@/components/SelectInput.vue";

export default {
  name: "SearchPage",
  components: { SelectInput, Header },
  data() {
    return {
      form: {
        query: undefined,
        cuisine: undefined,
        diet: undefined,
        intolerances: undefined,
        sort: undefined,
        sortDirection: undefined
      },
      ddl: {
        cuisine: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"],
        diet: ["TODO", "TODO2", "TODO3"],
        intolerances: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"],
        sort: ["popularity", "time"],
        sortDirection: ["asc", "desc"]
      }
    };
  },
  methods: {
    async Search(data) {
      console.log(data);
      const queryParams =
        {};
      try {
        const response = await this.axios.get(
          // this.$root.store.server_domain +
          "http://127.0.0.1:80/recipes",
          {
            params: queryParams
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    }
  }
};
</script>

<style scoped>

</style>