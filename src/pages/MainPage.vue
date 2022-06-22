<template>
  <div class="container">
    <Header title="Main Page"></Header>
    <RecipePreviewList title="Randome Recipes" :recipes="randomRecipes" class="RandomRecipes center" />

    <router-link v-if="!$root.store.username" to="/login" tag="button">You need to Login to vue this</router-link>

    <RecipePreviewList title="Last Viewed Recipes" :recipes="lastViewedRecipes"
                       :class="{RandomRecipes: true, blur: !$root.store.username, center: true}"
                       disabled></RecipePreviewList>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Header from "@/components/Header";

export default {
  components: { Header, RecipePreviewList },
  data() {
    return {
      randomRecipes: [],
      lastViewedRecipes: []
    };
  },
  methods: {
    async GetRandomRecipes() {
      try {
        const response = await this.axios.get(
          // this.$root.store.server_domain +
          "http://127.0.0.1:80/recipes/random/3"
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async GetLastViewedRecipes() {
      try {
        const response = await this.axios.get(
          // this.$root.store.server_domain +
          "http://127.0.0.1:80/recipes/viewed/3"
        );
        return response.data;
      } catch (error) {
        console.log(error);
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
