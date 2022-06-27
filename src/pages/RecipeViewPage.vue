<template>
  <div class="container">
    <div v-if="recipe">
      <Header :title="recipe.title"></Header>
      <div class="recipe-body">
        <div class="wrapper">
          <div class="wrapped">
            <recipe-preview-image :img-src="recipe.image"></recipe-preview-image>
          </div>
          <div class="wrapped ml-3">
            <i class="fa-solid fa-bell-concierge fa-lg"></i><i> {{ recipe.servings }} servings</i><br>
            <i class="fa fa-clock fa-lg"></i><i> {{ recipe.readyInMinutes }} minutes</i><br>
            <i class="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i><i> {{ recipe.popularity }} likes</i><br>
            <i class="fa-solid fa-seedling fa-lg"></i>
            <i> - </i>
            <i v-if="recipe.vegan === true" class="fa-solid fa-check fa-lg"></i>
            <i v-else class="fa-solid fa-x fa-lg"></i>
            <br>
            <i class="fas fa-fish fa-lg"></i>
            <i> - </i>
            <i v-if="recipe.vegetarian === true" class="fa-solid fa-check fa-lg"></i>
            <i v-else class="fa-solid fa-x fa-lg"></i>
            <br>
            <i class="fa-solid fa-wheat-awn-circle-exclamation fa-lg"></i>
            <i> - </i>
            <i v-if="recipe.glutenFree === true" class="fa-solid fa-check fa-lg"></i>
            <i v-else class="fa-solid fa-x fa-lg"></i>
            <br>
            <i v-if="recipe.inventedBy !== ''"><strong>This recipe invented by: {{recipe.inventedBy}}</strong><br></i>
            <i v-if="recipe.serveDay !== ''"><strong>The recipe serve day is: {{recipe.serveDay}}</strong><br></i>

            <i v-if="recipe.hasViewed === true" class="fa-solid fa-eye fa-lg"></i>
            <i v-else class="fa-solid fa-eye-slash fa-lg"></i>
            <br>
            <i v-if="recipe.isFavorite === true" class="fa-solid fa-star fa-lg"></i><br>
          </div>
        </div>
        <br>
        <h2>Instructions:</h2>

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import RecipePreviewImage from "@/components/RecipePreviewImage";

export default {
  components: { RecipePreviewImage, Header },
  data() {
    return {
      recipe: null
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        response = await this.axios.get(`recipes/${this.$route.params.recipeId}`);
        if (response.status !== 200) this.$router.replace("/NotFound");
        this.recipe = response.data;
        console.log(this.recipe);
      } catch (error) {
        console.log("error.response.status", error.response.status);
        this.$router.replace("/NotFound");
        return;
      }

      let {
        analyzedInstructions,
        instructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      } = response.data;

      let _instructions = analyzedInstructions
        .map((fstep) => {
          fstep.steps[0].step = fstep.name + fstep.steps[0].step;
          return fstep.steps;
        })
        .reduce((a, b) => [...a, ...b], []);

      let _recipe = {
        instructions,
        _instructions,
        analyzedInstructions,
        extendedIngredients,
        aggregateLikes,
        readyInMinutes,
        image,
        title
      };

      this.recipe = _recipe;
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
}

.wrapped {
  width: 50%;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

/* .recipe-header{

} */
</style>
