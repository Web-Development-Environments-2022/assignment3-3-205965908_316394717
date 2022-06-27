<template>
  <div id="equipments-block">
    <h3>Instructions:</h3>
    <div v-for="instructionSet in instructions" :key="instructionSet.name">
      <h5>{{ instructionSet.name }}</h5>
      <ol>
        <li v-for="step in instructionSet.steps" :key="step.number"> {{ step.step }}</li>
      </ol>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  name: "RecipeInstructions",
  props: {
    instructions: { type: Array, required: true }
  }
};
</script>

<style scoped>
ol {
  list-style-type: none;
  margin: 0 0 0 2.15em;
  padding: 0;
  counter-reset: li-counter;
}

li {
  position: relative;
  margin-bottom: 10px;
  padding-left: 0.5em;
  min-height: 3em;
  padding-top: 5px;
}

li::before {
  position: absolute;
  top: 2px;
  left: -32px;
  width: 28px;
  height: 28px;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  color: #fff;
  background-color: #e76182;
  border-radius: 50%;
  content: counter(li-counter);
  counter-increment: li-counter;
}
</style>