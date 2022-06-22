<template>
  <select class="custom-select" @change="$emit('update:modelValue', $event.target.value)">
    <option value="" selected>{{ title }}</option>
    <option v-for="x in items" :key="x" :value="x">
      {{ x }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
  },
};

</script>

<style scoped></style>