<template>
  <b-container>
    <h3>{{ title }}:</h3>
    <b-row>
      <b-col v-for="r in recipes" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";
export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      recipes: []
    };
  },
  mounted() {
    this.updateRecipes();
  },
  methods: {
    async updateRecipes() {
      try {
        const response = await this.axios.get(
          // this.$root.store.server_domain +
          "http://127.0.0.1:80/recipes/random/3"
        );
        const recipes = response.data;
        this.recipes = recipes;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#b-container {
  width: 100%;
  height: 100%;
}
.container {
  min-height: 320px;
}
</style>
