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
                <input type="text" id="form6Example1" class="form-control" v-model="amountInput">
                <label class="form-label" for="form6Example1" style="margin-left: 0px;">Amount</label>
                <div class="form-notch">
                  <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 103px;"></div>
                  <div class="form-notch-trailing"></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form6Example2" class="form-control" v-model="amountTypeInput">
                <label class="form-label" for="form6Example2" style="margin-left: 0px;">Amount Type</label>
                <div class="form-notch">
                  <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 52px;"></div>
                  <div class="form-notch-trailing"></div>
                </div>
              </div>
            </div>
          </div>
        </form>
</template>

<script>
export default {
  name: "IngredientInputModal",
  props: ['ingredientCounter'],
  data() {
    return {
      step:'',
      selected: '',
      amountInput: '',
      amountTypeInput: ''
    };
  }
};
</script>

<style scoped>
</style>