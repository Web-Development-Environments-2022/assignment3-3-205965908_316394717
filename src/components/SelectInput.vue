<template>
  <select class="custom-select" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
    <option value="" selected>{{ title }}</option>
    <option v-for="x in items" :key="x" :value="x">
      {{ x }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    modelValue : {type: String}
  },
  emits: ['update:modelValue'],
  methods: {
    emitChange(e) {
      this.$emit("update:modelValue", e.target.value);
      console.log("emit"); //TODO : remove
    }
  }
};

</script>

<style scoped></style>