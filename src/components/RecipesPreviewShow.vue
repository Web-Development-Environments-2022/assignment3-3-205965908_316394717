<template>
  <div>
    <b-row v-for="bulk in recipeBulks" :key="bulk.id" class="mb-10">
      <b-col v-for="r in bulk" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" :in-db="inDb" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreview from "@/components/RecipePreview";

export default {
  components: { RecipePreview },
  props: {
    recipes: { type: Array, required: true },
    inDb: { required: true }
  },
  data() {
    return {
      recipeBulks: []
    };
  },
  mounted() {
    let numberPerRow = 5;
    let i = 0;
    while (i < this.recipes.length) {
      this.recipeBulks.push(this.recipes.slice(i, i + numberPerRow));
      i += numberPerRow;
    }
  }
};
</script>

<style scoped>

</style>