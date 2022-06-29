<template>
  <form>
    Equipment {{ equipmentCounter }} :
    <div class="form-outline mb-4">
      <select v-model="$root.store.recipeInformation[dictKey].id">
        <option disabled value="">Choose Equipment</option>
        <option value="1">A</option>
        <option value="2">B</option>
        <option value="3">C</option>
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