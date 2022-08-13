<template>
  <div>
    <div :class="isDone ? 'done' : 'pend'">
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
    instruction: { required: true },
    isDone: { type: Boolean, required: true }
  }
};
</script>

<style scoped>
.pend {
  border: 5px solid red;
}

.done {
  border: 5px solid green;
}
</style>