<template>
  <div>
    <br>
    <b-row class="black-border">
      <b-col cols="1" class="cen">
        <strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ index + 1 }}</strong>
      </b-col>
      <b-col cols="1" class="cen">
        <b-icon-chevron-double-up @click="pressUp"></b-icon-chevron-double-up>
        <br> <br> <br>
        <b-icon-chevron-double-down @click="pressDown"></b-icon-chevron-double-down>
      </b-col>
      <b-col cols="3" class="cen">
        <router-link
          :to="{ name: 'making', params: { recipeId: item.id }, query: inDb === true ? {source: 'db'} : {} }">
          <RecipePreviewImage @click="changeRouteToMakingMeal" :imgSrc="item.image" />
        </router-link>
      </b-col>
      <b-col cols="3" class="cen">
        <router-link
          :to="{ name: 'making', params: { recipeId: item.id }, query: inDb === true ? {source: 'db'} : {} }">
          {{ item.title }}
        </router-link>
      </b-col>
      <b-col cols="3" class="cen">
        <b-progress height="1.5rem" class="mb-3">
          <b-progress-bar :value="progressVal" variant="success" striped>
            <span><strong>{{ progressText }}</strong></span>
          </b-progress-bar>
        </b-progress>
      </b-col>
      <b-col cols="1" class="cen">
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
    item: { required: true },
    index: { type: Number, required: true },
    inDb: { type: Boolean, required: true }
  },
  data() {
    return {
      doneSteps: 0
    };
  },
  created() {
    let key = `${this.inDb === true ? "D" : "S"}${this.item.id}`;
    let ls = localStorage.getItem(key);
    if (ls !== null) this.doneSteps = parseInt(ls);
  },
  computed: {
    progressVal() {
      if (!this.item) return 0;
      if (this.item.instructions[0].steps.length === 0) return 100;
      return (this.doneSteps / this.item.instructions[0].steps.length) * 100;
    },
    progressText() {
      if (!this.item) return "0/0";
      return `${this.doneSteps} / ${this.item.instructions[0].steps.length}`;
    }
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
<style scoped>
.black-border {
  border: 2px solid rgb(0, 0, 0);
  padding-right: 10px;
}

.cen {
  margin-top: auto;
  margin-bottom: auto;
}
</style>