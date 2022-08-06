<template>
  <form>
    Equipment {{ equipmentCounter }} :
    <div class="form-outline mb-4">
      <select v-model="$root.store.recipeInformation[dictKey].id">
        <option value="" disabled selected>Choose Equipment</option>
        <option v-for="equipment in this.$root.store.equipments" :value="equipment.id" :key="equipment.id">
          {{ equipment.name }}
        </option>
      </select>
    </div>
  </form>
</template>

<script>
export default {
  name: "EquipmentInputModal",
  props: ["equipmentCounter", "instructionId"],
  created() {
    this.$root.store.recipeInformation[this.dictKey] =
      {
        id: 0
      };
  },
  data() {
    return {
      dictKey: `Equipment-${this.instructionId}-${this.equipmentCounter}`
    };
  }
};
</script>

<style scoped>
</style>