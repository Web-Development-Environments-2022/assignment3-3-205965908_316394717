<template>
  <img v-if="image_load" :src="imgSrc" alt="Recipe Image" class="image" style="width:100%" />

</template>
<script>
import innerAxios from "axios";

export default {
  name: "RecipePreviewImage",
  props: {
    imgSrc: { type: String, default: "assets/imageNotFound.png" }
  },
  data() {
    return {
      image_load: false
    };
  },
  mounted() {
    innerAxios.get(this.imgSrc).then((i) => {
      this.image_load = true;
    });
  }
};
</script>
<style scoped>

</style>
