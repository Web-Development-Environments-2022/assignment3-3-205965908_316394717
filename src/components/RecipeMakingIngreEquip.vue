<template>
  <div id="equipments-block">
    <div v-if="ingredients && ingredients.length > 0">
      <p>Ingredients:</p>
      <b-row v-for="ingredient in ingredients" :key="ingredient.id" class="list-item">
        <b-col cols="2">
          <img :src="'https://spoonacular.com/cdn/ingredients_100x100/'+ingredient.image" class="list-img">
        </b-col>
        <b-col cols="10"><i>{{ ingredient.name }}</i></b-col>
      </b-row>
      <br>
    </div>

    <div v-if="equipments && equipments.length > 0">
      <p>Equipments:</p>
      <b-row v-for="equipment in equipments" :key="equipment.id" class="list-item">
        <b-col cols="2">
          <img :src="'https://spoonacular.com/cdn/equipment_100x100/'+equipment.image" class="list-img">
        </b-col>
        <b-col cols="10"><i>{{ equipment.name }}</i></b-col>
      </b-row>
      <br>
    </div>

  </div>
</template>

<script>
export default {
  name: "RecipeMakingIngreEquip",
  props: {
    ingredients: { type: Array, required: true },
    equipments: { type: Array, required: true }
  }
};
</script>

<style scoped>
#equipments-block {
  width: 75%;
}

.list-item {
  border-bottom: 1px solid #036;
  color: #036;
  font-size: 19px;
  line-height: 50px;
}

.list-img {
  max-width: 50px;
  max-height: 50px;
  vertical-align: middle;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>