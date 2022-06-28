<template>
  <div class="overflow-auto">
    <b-row>
      <b-col v-for="r in recipesToShow" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" />
      </b-col>
    </b-row>

    <!-- Use text in props -->
    <b-pagination-nav
      :number-of-pages="Math.floor(recipes.length/this.numberInPage)"
      @click="console.log('click')"
      @change="console.log('change')"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
    ></b-pagination-nav>
  </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview";
export default {
  components: { RecipePreview },
  props: {
    recipes: { type: Array, required: true },
    numberInPage: { type: Number, required: false, default:10 }
  },
  data() {
    return {
      recipesToShow: []
    };
  },
  mounted() {
    this.recipesToShow = this.recipes;
  }
};
</script>

<style scoped>

</style>