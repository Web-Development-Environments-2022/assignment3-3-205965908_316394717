<template>
  <div class="container">
    <Header title="Search"></Header>
    <form class="form-inline mb-10" @submit="Search">
      <SelectInput title="cuisine" :items="this.ddl.cuisine" @changeValue="(v) => form.cuisine = v" />
      <SelectInput title="diet" :items="this.ddl.diet" @changeValue="(v) => form.diet = v" />
      <SelectInput title="intolerances" :items="this.ddl.intolerances" @changeValue="(v) => form.intolerances = v" />
      <SelectInput title="sort" :items="this.ddl.sort" @changeValue="(v) => form.sort = v" />
      <SelectInput title="sortDirection" :items="this.ddl.sortDirection" @changeValue="(v) => form.sortDirection = v" />
      <input class="form-control mr-sm-2" type="search" placeholder="Query to search" aria-label="Search"
             v-model="form.query">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    <!--    TEST!!!: {{ form }}-->
    <br>
    <div v-if="responseData.results && responseData.results.length !== 0">
      <RecipesPreviewShow :recipes="responseData.results"></RecipesPreviewShow>

      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item"><a class="page-link" @click="goToPage('-1')">Previous</a></li>
          <li class="page-item"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" @click="goToPage('0')">Next</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SelectInput from "@/components/SelectInput.vue";
import RecipePreviewList from "@/components/RecipePreviewList";
import RecipesPreviewShow from "@/components/RecipesPreviewShow";

export default {
  name: "SearchPage",
  components: { RecipesPreviewShow, SelectInput, Header },
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
      },
      queryParams: {},
      currentPage: 1,
      limit: 10,
      responseData: []
    };
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
      this.currentPage = 1;
      await this.getData();
      return false;
    },
    async getData() {
      try {
        let params = this.queryParams;
        params.skip = (this.currentPage - 1) * this.limit;
        params.limit = this.limit;
        const response = await this.axios.get("recipes", { params: params });
        this.responseData = response.data;
      } catch (err) {
        console.log(err.response.data.message);
        this.$root.toast("Error", err.response.data.message, "danger");
      }
    },
    async goToPage(n) {
      if (n === 0)
        this.currentPage = this.currentPage + 1;
      else if (n === -1)
        this.currentPage = this.currentPage - 1;
      else
        this.currentPage = n < 1 ? 1 : n;
      await this.getData();
    }
  }
};
</script>

<style scoped>

</style>