<template>
  <!-- <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id } }"
    class="recipe-preview"
  > -->
  <!-- <div class="recipe-body">
      <img v-if="image_load" :src="recipe.image" class="recipe-image" />
    </div>
    <div class="recipe-footer">
      <div :title="recipe.title" class="recipe-title">
        {{ recipe.title }}
      </div>
      <ul class="recipe-overview">
        <li>{{ recipe.readyInMinutes }} minutes</li>
        <li>{{ recipe.popularity }} likes</li>
      </ul>
    </div> -->

  <div class="container">
    <div class="image-container">
      <RecipePreviewImageVue
        :imgSrc="recipe.image"
        :recipeTitle="recipe.title"
      />
    </div>
    <div class="content-container">
      <div class="truncate-long-texts">
        <strong>{{ recipe.title }}</strong>
      </div>
      <br />
      <i>{{ recipe.readyInMinutes }} minutes | {{ recipe.popularity }} likes</i>
      <br />
      <i class="fa-duotone fa-seedling"></i>
      <i class="fa-duotone fa-salad"></i>
      <i class="fa-duotone fa-wheat-slash"></i>
    </div>
  </div>
  <!-- </router-link> -->
</template>

<script>
import RecipePreviewImageVue from "./RecipePreviewImage.vue";
export default {
  name: "RecipePreview",
  props: {
    recipe: { type: Object, required: true },
  },
  data() {
    return {};
  },
  components: {
    RecipePreviewImageVue,
  },
};
</script>

<style scoped>
.container {
}
.image-container {
  border: 3px solid rgb(0, 0, 0);
  width: 100%;
  height: 80%;
}

.content-container {
  border: 2px solid red;
  height: 20%;
}
.truncate-long-texts {
  text-overflow: ellipsis;
  overflow: hidden;
  width: 160px;
  height: 1.2em;
  white-space: nowrap;
}
.truncate-long-texts:hover {
  text-overflow: clip;
  overflow: unset;
  width: 160px;
  height: 1.2em;
  white-space: initial;
}

.overflow-information {
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
}
</style>
