<template>
  <div>
    <b-row>
      <b-col>
        <RecipePreviewImage :imgSrc="item.image" />
      </b-col>
      <b-col> {{ item.title }}</b-col>
      <b-col>TODO</b-col>
      <b-col>
        <button type="button" class="btn btn-outline-danger" @click="remove">Remove</button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewImage from "@/components/RecipePreviewImage";

export default {
  components: { RecipePreviewImage },
  name: "MakeRecipePreview",
  props: {
    item: { require: true },
    inDb: { type: Boolean, require: true }
  },
  methods: {
    remove() {
      this.$root.removeIdFromMealList(this.item.id, this.inDb);
      this.$emit("remove");
    }
  }
};

</script>
<style scoped></style>