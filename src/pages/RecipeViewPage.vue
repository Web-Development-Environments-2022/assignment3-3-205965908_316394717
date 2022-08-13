<template>
  <div class="container">
    <div v-if="isLoading === true"><h3>Loading...</h3></div>
    <div v-else-if="recipe">
      <Header :title="recipe.title"></Header>
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
          <i v-if="recipe.inventedBy"><strong>This recipe invented by: {{ recipe.inventedBy }}</strong><br></i>
          <i v-if="recipe.serveDay"><strong>The recipe serve day is: {{ recipe.serveDay }}</strong><br></i>

          <i v-if="recipe.hasViewed === true" class="fa-solid fa-eye fa-lg"></i>
          <i v-else class="fa-solid fa-eye-slash fa-lg"></i>
          <br>
          <i v-if="recipe.isFavorite === true" class="fa-solid fa-star fa-lg"></i><br>
          <br>
          <div v-if="$route.query.source !== 'db'">
            <button v-if="recipe.isFavorite !== true" type="button" class="btn btn-outline-warning"
                    @click="addToFavorite">Add To Favorite
            </button>
            <button v-else type="button" class="btn btn-outline-danger" @click="removeFromFavorite">Remove From Favorite
            </button>
          </div>
          <br>
          <div>
            <button v-if="this.inMealList === true" type="button" class="btn btn-outline-danger"
                    @click="removeFromMealList">Remove From Next Meal
            </button>
            <button v-else type="button" class="btn btn-outline-success" @click="addToMealList">Add To Next Meal
            </button>
          </div>
        </div>
      </div>
      <br>
      <h2>How to make it?:</h2>
      <p>This meal is for {{ recipe.servings }} servings</p>

      <RecipeIngredients :ingredients="recipe.ingredients || []"></RecipeIngredients>
      <RecipeEquipments :equipments="recipe.equipments || []"></RecipeEquipments>
      <RecipeInstructions :instructions="recipe.instructions"></RecipeInstructions>
    </div>
    <div v-else><h1>Recipe Not Found...</h1></div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import RecipePreviewImage from "@/components/RecipePreviewImage";
import RecipeEquipments from "@/components/RecipeEquipments";
import RecipeIngredients from "@/components/RecipeIngredients";
import RecipeInstructions from "@/components/RecipeInstructions";

export default {
  components: { RecipeIngredients, RecipeEquipments, RecipeInstructions, RecipePreviewImage, Header },
  data() {
    return {
      recipe: null,
      inMealList: false,
      isLoading: true
    };
  },
  async created() {
    try {
      let response;
      // response = this.$route.params.response;

      try {
        let path = this.$route.query.source === "db" ? `recipes/my/${this.$route.params.recipeId}` : `recipes/${this.$route.params.recipeId}`;
        response = await this.axios.get(path);
        if (response.status !== 200) this.$router.replace("/NotFound");
        this.recipe = response.data;
      } catch (error) {
        this.$router.replace("/NotFound");
        return;
      }
      this.inMealList = this.$root.isIdInMealList(this.recipe.id, this.$route.query.source === "db");
      this.isLoading = false;
    } catch (error) {
      this.$root.toast("Input Error", error.message, "danger");
    }
  },
  methods: {
    async addToFavorite() {
      try {
        const response = await this.axios.post("users/favorites", { recipeId: this.recipe.id });
        this.recipe.isFavorite = true;
      } catch (err) {
        this.$root.toast("Error", err.response.data.message, "danger");
      }
    },
    async removeFromFavorite() {
      try {
        const response = await this.axios.delete(`users/favorites/${this.recipe.id}`);
        this.recipe.isFavorite = false;
      } catch (err) {
        this.$root.toast("Error", err.response.data.message, "danger");
      }
    },
    addToMealList() {
      this.$root.addIdToMealList(this.recipe.id, this.$route.query.source === "db");
      this.inMealList = true;
    },
    removeFromMealList() {
      this.$root.removeIdFromMealList(this.recipe.id, this.$route.query.source === "db");
      this.inMealList = false;
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

</style>
