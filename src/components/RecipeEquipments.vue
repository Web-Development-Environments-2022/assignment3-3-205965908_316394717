<template>
  <div id="equipments-block">
    <b-container>
      <h3>Equipments:</h3>
      <b-row v-for="equipment in equipments" :key="equipment.id" class="list-item">
        <b-col cols="2">
          <img :src="'https://spoonacular.com/cdn/equipment_100x100/'+equipment.image" class="list-img">
        </b-col>
        <b-col cols="10"><i>{{ equipment.name }}</i></b-col>
      </b-row>
    </b-container>
    <br>
  </div>
</template>

<script>
export default {
  name: "RecipeEquipments",
  props: {
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