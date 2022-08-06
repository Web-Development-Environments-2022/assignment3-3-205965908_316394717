<template>
  <form>
    Ingredient {{ ingredientCounter }} :
    <div class="form-outline mb-4">
      <select v-model="$root.store.recipeInformation[dictKey].id">
        <option value="" disabled selected>Choose Ingredient</option>
        <option v-for="ingredient in this.$root.store.ingredients" :value="ingredient.id" :key="ingredient.id">
          {{ ingredient.name }}
        </option>
      </select>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="form-outline">
          <label class="form-label" for="form6Example1" style="margin-left: 0px;">
            Amount: {{ amount }}
          </label>
          <input type="range" min="0" max="1000" id="form6Example1" class="form-control"
                 v-model="amount" @input="update">
        </div>
      </div>
      <div class="col">
        <div class="form-outline">
          <label class="form-label" for="form6Example2" style="margin-left: 0px;">Amount Type</label>
          <input type="text" id="form6Example2" class="form-control"
                 v-model="$root.store.recipeInformation[dictKey].amountType">
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "IngredientInputModal",
  props: ["ingredientCounter", "instructionId"],
  created() {
    this.$root.store.recipeInformation[this.dictKey] =
      {
        id: 0,
        amount: 0,
        amountType: ""
      };
  },
  data() {
    return {
      dictKey: `Ingredient-${this.instructionId}-${this.ingredientCounter}`,
      amount: 0
    };
  },
  methods: {
    update(){
      this.$root.store.recipeInformation[this.dictKey].amount = this.amount;
    }
  }

};
</script>

<style scoped>
</style>