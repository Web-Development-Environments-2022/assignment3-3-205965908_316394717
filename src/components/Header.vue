<template>
  <header>
    <h1><u>{{ title }}</u></h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: { type: String, default: "my title" },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
</style>
