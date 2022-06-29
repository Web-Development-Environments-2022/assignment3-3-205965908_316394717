<template>
  <router-link
    :to="{ name: 'recipe', params: { recipeId: recipe.id }, query: inDb ? {source: 'db'} : {} }">
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
        <table class="ml-auto mr-auto">
          <tr>
            <td><i class="fa fa-clock"></i><i> {{ recipe.readyInMinutes }} minutes</i></td>
            <td>&nbsp;&nbsp;</td>
            <td><i class="fa fa-thumbs-o-up" aria-hidden="true"></i><i> {{ recipe.popularity }} likes</i></td>
          </tr>
        </table>
        <table class="ml-auto mr-auto">
          <tr>
            <td><i class="fa-solid fa-seedling"></i><i> {{ recipe.vegan }}</i></td>
            <td>&nbsp;&nbsp;</td>
            <td><i class="fas fa-fish"></i><i> {{ recipe.vegetarian }}</i></td>
            <td>&nbsp;&nbsp;</td>
            <td><i class="fa-solid fa-wheat-awn-circle-exclamation"></i><i> {{ recipe.glutenFree }}</i></td>
          </tr>
          <tr>
            <td>
              <i v-if="recipe.hasViewed === true" class="fa-solid fa-eye"></i>
              <i v-else class="fa-solid fa-eye-slash"></i>
            </td>
            <td>&nbsp;&nbsp;</td>
            <td>
              <i v-if="recipe.isFavorite === true" class="fa-solid fa-star"></i>
            </td>
          </tr>
        </table>

      </div>
    </div>
  </router-link>
</template>

<script>
import RecipePreviewImageVue from "./RecipePreviewImage.vue";

export default {
  name: "RecipePreview",
  props: {
    recipe: { type: Object, required: true },
    inDb: { required: true }
  },
  data() {
    return {};
  },
  components: {
    RecipePreviewImageVue
  }
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
