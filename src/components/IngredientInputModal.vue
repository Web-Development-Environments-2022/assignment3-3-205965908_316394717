<template>
       <form>
           Ingredient {{ingredientCounter}} :
          <div class="form-outline mb-4">
            <select v-model="selected">
            <option disabled value="">Choose Ingredient</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>
          </div>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example1" style="margin-left: 0px;">Amount: {{ amountInput }}</label>
                <input type="range" min="0" max="1000" id="form6Example1" class="form-control" v-model="amountInput">
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2" style="margin-left: 0px;">Amount Type</label>
                <input type="text" id="form6Example2" class="form-control" v-model="amountTypeInput">
              </div>
            </div>
          </div>
        </form>
</template>

<script>
export default {
  emits: ['amountTypeInput', 'amountInput'],
  name: "IngredientInputModal",
  props: ['ingredientCounter'],
  data() {
    return {
      selected: '',
      amountInput: '',
      amountTypeInput: "Default Amount Type"
    };
  }
  
};
</script>

<style scoped>
</style>