<template>
  <select class="custom-select" v-model="value" @change="changeValue">
    <option value="" selected>{{ title }}</option>
    <option v-for="x in items" :key="x" :value="x">{{ x }}</option>
  </select>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true }
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    changeValue(e) {
      this.$emit("changeValue", this.value);
    }
  }
};

</script>

<style scoped></style>