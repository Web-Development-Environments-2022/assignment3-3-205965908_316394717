<template>
  <div class="container">
    <div class="card">
      <div class="image-container">
        <router-link
          :to="{ name: 'recipe', params: { recipeId: recipe.id }, query: inDb === true ? {source: 'db'} : {} }">
          <RecipePreviewImageVue
            :imgSrc="recipe.image"
            :recipeTitle="recipe.title"
          />
        </router-link>
      </div>
      <div class="content-container">
        <router-link
          :to="{ name: 'recipe', params: { recipeId: recipe.id }, query: inDb === true ? {source: 'db'} : {} }">
          <div>
            <strong>{{ recipe.title }}</strong>
          </div>
        </router-link>
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
  </div>
</template>

<script>
import RecipePreviewImageVue from "./RecipePreviewImage.vue";

export default {
  name: "RecipePreview",
  props: {
    recipe: { type: Object, required: true },
    inDb: { type: Boolean, required: true }
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
  margin-bottom: 3px;
}

.card:hover {
  transform: scale(1.025);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 5px 10px
}

.image-container {
  border-top: 3px solid rgb(0, 0, 0);
  border-left: 3px solid rgb(0, 0, 0);
  border-right: 3px solid rgb(0, 0, 0);
  width: 100%;
  height: 80%;
}

.content-container {
  border-bottom: 3px solid rgb(0, 0, 0);
  border-left: 3px solid rgb(0, 0, 0);
  border-right: 3px solid rgb(0, 0, 0);
  height: 20%;
}
</style>