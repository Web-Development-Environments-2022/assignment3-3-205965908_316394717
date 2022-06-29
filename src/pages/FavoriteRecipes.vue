<template>
  <div>
    <Header title="Favorite Recipes:"></Header>
    <RecipesViewGallery :get-data="getData"></RecipesViewGallery>
  </div>
</template>

<script>
import Header from "@/components/Header";
import RecipesViewGallery from "@/components/RecipesViewGallery.Vue";

export default {
  components: { RecipesViewGallery, Header },
  methods: {
    async getData(currentPage, limit) {
      try {
        let params = {
          skip: (currentPage - 1) * limit,
          limit: limit
        };
        const response = await this.axios.get("favorites", { params: params });
        return response.data;
      } catch (err) {
        console.log(err.response.data.message);
        this.$root.toast("Error", err.response.data.message, "danger");
      }
    }
  }
};
</script>

<style scoped>

</style>