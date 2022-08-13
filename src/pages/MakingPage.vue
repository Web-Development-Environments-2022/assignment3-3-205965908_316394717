<template>
  <div class="container">
    <Header :title="recipe ? recipe.title : 'Loading...'"></Header>

    <div v-if="recipe === undefined"><h3>No Data To Show...</h3></div>
    <div v-else>
      <RecipeIngredients :ingredients="recipe.ingredients || []"
                         :originalServings="parseInt(recipe.servings)"></RecipeIngredients>
      <RecipeEquipments :equipments="recipe.equipments || []"></RecipeEquipments>

      <h3>Steps:</h3>
      <MakeRecipeStep v-for="(instruction, index) in recipe.instructions[0].steps" :id="`step-${index}`"
                      :instruction="instruction" :key="instruction.number"
                      :is-done="index < doneSteps"></MakeRecipeStep>

      <footer class="footer">
        <div class="container">
          <b-row>
            <b-col cols="1">
              <b-button variant="danger" @click="prevStep">Prev</b-button>
            </b-col>
            <b-col cols="10">
              <b-progress height="1.5rem" class="mb-3">
                <b-progress-bar :value="progressVal" variant="success" striped>
                  <span><strong>{{ progressText }}</strong></span>
                </b-progress-bar>
              </b-progress>
            </b-col>
            <b-col cols="1">
              <b-button variant="success" @click="nextStep">Next</b-button>
            </b-col>
          </b-row>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MakeRecipeStep from "@/components/MakeRecipeStep.vue";
import RecipeIngredients from "@/components/RecipeIngredients";
import RecipeEquipments from "@/components/RecipeEquipments";

export default {
  components: { Header, MakeRecipeStep, RecipeIngredients, RecipeEquipments },
  name: "MakingPage",
  data() {
    return {
      recipe: undefined,
      doneSteps: 0
    };
  },
  computed: {
    progressVal() {
      if (!this.recipe) return 0;
      if (this.recipe.instructions[0].steps.length === 0) return 100;
      return (this.doneSteps / this.recipe.instructions[0].steps.length) * 100;
    },
    progressText() {
      if (!this.recipe) return "0/0";
      return `${this.doneSteps} / ${this.recipe.instructions[0].steps.length}`;
    }
  },
  async created() {
    try {
      let path = this.$route.query.source === "db" ? `recipes/my/${this.$route.params.recipeId}` : `recipes/${this.$route.params.recipeId}`;
      let response = await this.axios.get(path);
      if (response.status !== 200) this.$router.replace("/NotFound");
      this.recipe = response.data;

      let key = `${this.$route.query.source === "db" ? "D" : "S"}${this.recipe.id}`;
      let ls = localStorage.getItem(key);
      if (ls !== null) this.doneSteps = parseInt(ls);
    } catch (error) {
      this.$router.replace("/NotFound");
    }
  },
  methods: {
    prevStep() {
      this.doneSteps -= 1;
      if (this.doneSteps < 0) this.doneSteps = 0;
      this.updateStepInLocal();
      document.getElementById(`step-${this.doneSteps}`)?.scrollIntoView();
    },
    nextStep() {
      this.doneSteps += 1;
      if (this.doneSteps > this.recipe.instructions[0].steps.length) this.doneSteps = this.recipe.instructions[0].steps.length;
      this.updateStepInLocal();
      document.getElementById(`step-${this.doneSteps}`)?.scrollIntoView();
    },
    updateStepInLocal() {
      let key = `${this.$route.query.source === "db" ? "D" : "S"}${this.recipe.id}`;
      localStorage.setItem(key, this.doneSteps);
    }
  }
};
</script>

<style scoped>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  /*background-color: white;*/
}
</style>