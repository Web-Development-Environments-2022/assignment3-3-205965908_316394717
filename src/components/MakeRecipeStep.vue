<template>
  <div>
    <div id="container">
      <RecipeMakingIngreEquip :ingredients="instruction.ingredients || []"
                              :equipments="instruction.equipments || []"></RecipeMakingIngreEquip>
      <h3>{{ instruction.step }}</h3>
    </div>
    <br>
  </div>
</template>

<script>
import RecipeMakingIngreEquip from "@/components/RecipeMakingIngreEquip";

export default {
  name: "MakeRecipeStep",
  components: { RecipeMakingIngreEquip },
  data() {
    return {};
  },
  props: {
    instruction: { require: true }
  }
};
</script>

<style scoped>
#container {
  border: 3px solid rgb(0, 0, 0);
}
</style>