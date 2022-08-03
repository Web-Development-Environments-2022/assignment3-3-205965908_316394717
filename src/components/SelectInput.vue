<template>
  <select id="inputSelect" class="custom-select" v-model="value" @change="changeValue">
    <option value="" selected>{{ title }}</option>
    <option v-for="x in items" :key="x" :value="x">{{ x }}</option>
  </select>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    title: { type: String, required: true },
    items: { type: Array, required: true },
    selected: { type: String, required: false, default: undefined }
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
  },
  mounted() {
    if (this.selected !== undefined){
      console.log(`${this.selected}`);
      document.getElementById("inputSelect").value = this.selected;
    }
  }
};

</script>

<style scoped></style>