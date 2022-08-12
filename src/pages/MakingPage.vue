<template>
  <div class="container">
    <Header :title="recipe ? recipe.title : 'Loading...'"></Header>
    <div v-if="recipe === undefined"><h3>No Data To Show...</h3></div>
    <div v-else>
      <MakeRecipeStep v-for="instruction in recipe.instructions[0].steps" :instruction="instruction"
                      :key="instruction.number"></MakeRecipeStep>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MakeRecipeStep from "@/components/MakeRecipeStep.vue";

export default {
  components: { Header, MakeRecipeStep },
  name: "MakingPage",
  data() {
    return {
      recipe: undefined
    };
  },
  async created() {
    try {
      let path = this.$route.query.source === "db" ? `recipes/my/${this.$route.params.recipeId}` : `recipes/${this.$route.params.recipeId}`;
      let response = await this.axios.get(path);
      if (response.status !== 200) this.$router.replace("/NotFound");
      this.recipe = response.data;
    } catch (error) {
      console.log("error.response.status", error.response.status);
      this.$router.replace("/NotFound");
    }
  }
};
</script>

<style scoped>

</style>