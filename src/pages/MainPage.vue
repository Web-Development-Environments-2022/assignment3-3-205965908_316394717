<template>
  <div class="container">
    <Header title="Main Page"></Header>
    <b-container>
      <b-row>
        <b-col>
          <RecipePreviewList title="Randome Recipes" :recipes="randomRecipes || []" class="RandomRecipes center" />
        </b-col>
        <b-col>
          <Login v-if="!$root.store.username"></Login>

          <RecipePreviewList v-else title="Last Viewed Recipes" :recipes="lastViewedRecipes || []"
                             :class="{RandomRecipes: true, blur: !$root.store.username, center: true}"
                             disabled></RecipePreviewList>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Header from "@/components/Header";
import Login from "@/pages/LoginPage";

export default {
  components: { Login, Header, RecipePreviewList },
  data() {
    return {
      randomRecipes: [],
      lastViewedRecipes: []
    };
  },
  methods: {
    async GetRandomRecipes() {
      try {
        const response = await this.axios.get("recipes/random/3");
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    async GetLastViewedRecipes() {
      try {
        const response = await this.axios.get("recipes/viewed/3");
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  async mounted() {
    this.randomRecipes = await this.GetRandomRecipes();
    if (this.$root.store.username)
      this.lastViewedRecipes = await this.GetLastViewedRecipes();
    else
      this.lastViewedRecipes = await this.GetRandomRecipes();
  }
};
</script>

<style lang="scss" scoped>
.RandomRecipes {
  margin: 10px 0 10px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
