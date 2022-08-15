<template>
  <div class="container">
    <Header title="Your Cart"></Header>
    <div v-if="isLoading === true"><h3>Loading...</h3></div>
    <div v-else-if="itemList.length === 0"><h3>No data to show</h3></div>
    <div v-else>
      <button type="button" class="btn btn-outline-danger" @click="removeAll">Remove All</button>
      <MakeRecipePreview v-for="(item, index) in itemList" :key="item.data.id" :item="item.data" :in-db="item.inDb"
                         @remove="removed" :index="index"></MakeRecipePreview>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import MakeRecipePreview from "@/components/MakeRecipePreview";

export default {
  components: { Header, MakeRecipePreview },
  name: "Cart",
  data() {
    return {
      itemList: [],
      isLoading: true
    };
  },
  async created() {
    await this.removed();
    this.isLoading = false;
  },
  methods: {
    async removed() {
      //TODO: find the right way to update the view! dont call the removed every time
      let localList = localStorage.getItem("meal list");
      let list = localList === null || localList === "" ? [] : localList.split(";");
      let recipes = [];
      for (let i = 0; i < list.length; i++) {
        let path = list[i].charAt(0) === "D" ? `recipes/my/${list[i].substring(1)}` : `recipes/${list[i].substring(1)}`;
        recipes.push(this.axios.get(path));
      }
      let items = [];
      for (let i = 0; i < list.length; i++) {
        try {
          let response = await recipes[i];
          if (response.status !== 200) this.$root.toast("Error", response.data.message, "danger");
          else {
            items.push({ data: response.data, inDb: list[i].charAt(0) === "D" });
          }
        } catch (e) {
          this.$root.toast("Error", e.message, "danger");
        }
      }
      this.itemList = items;
    },
    async removeAll() {
      this.$root.removeAllMealList();
      await this.removed();
    }
  }


};
</script>

<style scoped></style>