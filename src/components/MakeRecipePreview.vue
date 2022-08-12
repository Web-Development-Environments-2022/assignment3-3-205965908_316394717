<template>
  <div>
    <br>
    <b-row>
      <b-col cols="1"> <!-- UP-->
        <b-icon-chevron-double-up @click="pressUp"></b-icon-chevron-double-up>
        <br>
        <br>
        <br>
        <b-icon-chevron-double-down @click="pressDown"></b-icon-chevron-double-down>
      </b-col>
      <b-col>
        <router-link
          :to="{ name: 'making', params: { recipeId: item.id }, query: inDb === true ? {source: 'db'} : {} }">
          <RecipePreviewImage @click="changeRouteToMakingMeal" :imgSrc="item.image" />
        </router-link>
      </b-col>
      <router-link :to="{ name: 'making', params: { recipeId: item.id }, query: inDb === true ? {source: 'db'} : {} }">
        <b-col> {{ item.title }}</b-col>
      </router-link>
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
    },
    pressUp() {
      this.$root.updateMealPosition(this.item.id, this.inDb, true);
      this.$emit("remove");
    },
    pressDown() {
      this.$root.updateMealPosition(this.item.id, this.inDb, false);
      this.$emit("remove");
    },

    changeRouteToMakingMeal() {//TODO: add vue for specific making meal.
      // this.$router.replace("/NotFound");
    }
  }
};

</script>
<style scoped></style>