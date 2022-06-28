<template>
       <form>
        Equipment {{equipmentCounter}} :
          <div class="form-outline mb-4">
            <select v-model="selected">
            <option disabled value="">Choose Equipment</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            </select>
          </div>
        </form>
</template>

<script>
export default {
  name: "EquipmentInputModal",
  props: ['equipmentCounter'],
  data() {
    return {
      step:'',
      selected:''
    };
  }
};
</script>

<style scoped>
</style>