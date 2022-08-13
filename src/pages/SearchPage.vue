<template>
  <div class="container">
    <Header title="Search"></Header>
    <form class="form-inline mb-10" @submit="Search">
      <SelectInput title="Cuisine" :selected="form.cuisine" :items="ddl.cuisine"
                   @changeValue="(v) => form.cuisine = v" />
      <SelectInput title="Diet" :selected="form.diet" :items="ddl.diet" @changeValue="(v) => form.diet = v" />
      <SelectInput title="Intolerances" :selected="form.intolerances" :items="ddl.intolerances"
                   @changeValue="(v) => form.intolerances = v" />
      <SelectInput title="Sort" :selected="form.sort" :items="ddl.sort" @changeValue="(v) => form.sort = v" />
      <SelectInput title="Sort Direction" :selected="form.sortDirection" :items="ddl.sortDirection"
                   @changeValue="(v) => form.sortDirection = v" />
      <input class="form-control mr-sm-2" type="search" placeholder="Query to search" aria-label="Search"
             v-model="form.query">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <br>
    <RecipesViewGallery v-if="queryParams !== undefined" :key="counterUpdateFlag" :get-data="getData"
                        :in-db="false"></RecipesViewGallery>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SelectInput from "@/components/SelectInput.vue";
import RecipesViewGallery from "@/components/RecipesViewGallery.vue";

export default {
  name: "SearchPage",
  components: { RecipesViewGallery, SelectInput, Header },
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
      counterUpdateFlag: 0,
      ddl: {
        cuisine: ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"],
        diet: ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"],
        intolerances: ["Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"],
        sort: ["popularity", "time"],
        sortDirection: ["asc", "desc"]
      },
      queryParams: undefined
    };
  },
  created() {
    let last = localStorage.getItem("lastSearch");
    if (last) this.form = JSON.parse(last);
  },
  methods: {
    async Search() {
      Object.keys(this.form).forEach(key => this.form[key] === "" ? this.form[key] = undefined : {});
      this.queryParams =
        {
          query: this.form.query,
          cuisine: this.form.cuisine,
          diet: this.form.diet,
          intolerances: this.form.intolerances,
          sort: this.form.sortBy,
          sortDirection: this.form.sortDirection
        };
      localStorage.setItem("lastSearch", JSON.stringify(this.queryParams));
      this.counterUpdateFlag++;
      return false;
    },
    async getData(currentPage, limit) {
      try {
        let params = this.queryParams;
        params.skip = (currentPage - 1) * limit;
        params.limit = limit;
        const response = await this.axios.get("recipes", { params: params });
        return response.data;
      } catch (err) {
        this.$root.toast("Error", err.response.data.message, "danger");
      }
    }
  }
};
</script>

<style scoped>

</style>