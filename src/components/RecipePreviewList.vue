<template>
  <div>
    <b-row>
      <b-col cols="2"></b-col>
      <b-col>
        <h3>{{ title }}</h3>
      </b-col>
      <b-col cols="2"></b-col>
    </b-row>
    <b-row v-for="r in recipes" :key="r.id">
      <b-col>
        <RecipePreview class="recipePreview" :recipe="r" :in-db="false" />
      </b-col>
    </b-row>
    <b-button v-if="haveMore === true" variant="primary" class="w-100" @click="$emit('updateRandom')">More</b-button>
  </div>
</template>

<script>
import RecipePreview from "./RecipePreview.vue";

export default {
  name: "RecipePreviewList",
  components: {
    RecipePreview
  },
  props: {
    title: { type: String, required: true },
    recipes: { type: Array, required: true },
    haveMore: { type: Boolean, default: false }
  },
  created() {
    if (!this.recipes || this.recipes.length === 0)
      this.$emit("created");
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
