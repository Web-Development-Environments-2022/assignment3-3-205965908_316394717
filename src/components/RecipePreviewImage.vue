<template lang="">
      <img v-if="image_load" :src="imgSrc" alt="Recipe Image" class="image" style="width:100%"  />
</template>
<script>
export default {
  name: "RecipePreviewImage",
  props: {
    imgSrc: { type: String, default: "TODO" },
    recipeTitle: { type: String, default: "TODO" },
  },
  data() {
    return {
      image_load: false,
    };
  },
  mounted() {
    this.axios.get(this.imgSrc).then((i) => {
      this.image_load = true;
    });
  },
};
</script>
<style scoped>

</style>
