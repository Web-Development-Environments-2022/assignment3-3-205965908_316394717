<template>
  <div class="container">
    <Header title="Favorite Recipes:"></Header>
    <RecipesViewGallery :get-data="getData" :in-db="false"></RecipesViewGallery>
  </div>
</template>

<script>
import Header from "@/components/Header";
import RecipesViewGallery from "@/components/RecipesViewGallery.vue";

export default {
  components: { RecipesViewGallery, Header },
  methods: {
    async getData(currentPage, limit) {
      try {
        let params = {
          skip: (currentPage - 1) * limit,
          limit: limit
        };
        const response = await this.axios.get("recipes/favorites", { params: params });
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