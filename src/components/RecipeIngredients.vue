<template>
  <div id="ingredients-block">
    <b-container>
      <h3>Ingredients:</h3>
      <b-row v-for="ingredient in ingredients" :key="ingredient.id" class="list-item">
        <b-col cols="2">
          <img :src="'https://spoonacular.com/cdn/ingredients_100x100/'+ingredient.image" class="list-img">
        </b-col>
        <b-col cols="3"><i>{{ ingredient.amount }} {{ ingredient.amountType }}</i></b-col>
        <b-col cols="7"><i>{{ ingredient.name }}</i></b-col>
      </b-row>
    </b-container>
    <br>
  </div>
</template>

<script>
export default {
  name: "RecipeIngredients",
  props: {
    ingredients: { type: Array, required: true }
  }
};
</script>

<style scoped>
#ingredients-block {
  width: 75%;
}

.list-item {
  border-bottom: 1px solid #036;
  color: #036;
  font-size: 19px;
  line-height: 80px;
  padding: 5px 0;
}

.list-img {
  max-width: 80px;
  max-height: 77px;
  vertical-align: middle;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>