<template>
  <div class="container">
    <Header title="Search"></Header>
    <form class="form-inline" @submit="Search">
      <SelectInput title="cuisine" :items="this.ddl.cuisine" @changeValue="(v) => form.cuisine = v" />
      <SelectInput title="diet" :items="this.ddl.diet" @changeValue="(v) => form.diet = v" />
      <SelectInput title="intolerances" :items="this.ddl.intolerances" @changeValue="(v) => form.intolerances = v" />
      <SelectInput title="sort" :items="this.ddl.sort" @changeValue="(v) => form.sort = v" />
      <SelectInput title="sortDirection" :items="this.ddl.sortDirection" @changeValue="(v) => form.sortDirection = v" />
      <input class="form-control mr-sm-2" type="search" placeholder="Query to search" aria-label="Search"
             v-model="form.query">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    TEST!!!:{{ form }}
    <RecipesPreviewShow v-if="recipes.length !== 0" :recipes="this.recipes || []"></RecipesPreviewShow>
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
      recipes: []
    };
  },
  methods: {
    async Search() {
      Object.keys(this.form).forEach(key => this.form[key] === "" ? this.form[key] = undefined : {});
      const queryParams =
        {
          query: this.form.query,
          cuisine: this.form.cuisine,
          diet: this.form.diet,
          intolerances: this.form.intolerances,
          sort: this.form.sortBy,
          sortDirection: this.form.sortDirection
        };
      console.log("queryParams");
      console.log(queryParams);
      try {
        const response = await this.axios.get("recipes",
          {
            params: queryParams
          }
        );
        console.log("response");
        console.log(response);
        this.recipes = response.data;
        return false;
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
    log(value) {
      console.log(value);
    }
  }
};
</script>

<style scoped>

</style>