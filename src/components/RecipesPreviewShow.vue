<template>
  <div>
    <b-row v-for="bulk in recipeBulks" :key="bulk.id" class="mb-10">
      <b-col v-for="r in bulk" :key="r.id">
        <RecipePreview class="recipePreview" :recipe="r" :in-db="inDb" />
      </b-col>
      <b-col v-for="index in numberPerRow - bulk.length" :key="`temp-${index}`"></b-col>
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
      recipeBulks: [],
      numberPerRow: 5
    };
  },
  mounted() {
    let i = 0;
    while (i < this.recipes.length) {
      this.recipeBulks.push(this.recipes.slice(i, i + this.numberPerRow));
      i += this.numberPerRow;
    }
  }
};
</script>

<style scoped>

</style>