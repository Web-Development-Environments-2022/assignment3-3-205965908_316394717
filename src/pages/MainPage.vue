<template>
  <div>
    <b-row>
      <b-col></b-col>
      <b-col>
        <Header title="The Recipes Of Grandma"></Header>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row>
      <b-col cols="3">
        <RecipePreviewList title="Explore This Recipes" :recipes="randomRecipes || []" />
        <b-button variant="primary" class="w-100" @click="changeRandomRecipes">More</b-button>
      </b-col>
      <b-col cols="6">
        <strong>
          <b-container>
            <p>Welcome to the best website across the universe for food and recipes!</p>
            <p>Our website is full of great taste recipes that are just waiting for your next meal.</p>
            <p>Take a short registration and enjoy the full functionality available on our site.</p>
            <p>If you are coming to Netanya city, don't forget to visit in the best restaurant in town:</p>
            <img src="https://images.rest.co.il/Customers/80257072/2d6368774beb41aa91a91ac5c5a4e23f.jpg" style="width: 100%">

          </b-container>
        </strong>

      </b-col>
      <b-col cols="3">
        <Login v-if="!$root.store.username"></Login>

        <RecipePreviewList v-else title="Last Viewed Recipes" :recipes="lastViewedRecipes || []" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import RecipePreviewList from "../components/RecipePreviewList";
import Header from "@/components/Header";
import Login from "@/pages/LoginPage";

export default {
  components: { Login, Header, RecipePreviewList },
  data() {
    return {
      randomRecipes: [],
      lastViewedRecipes: []
    };
  },
  async mounted() {
    await this.getData();
  },
  methods: {
    async getRandomRecipes() {
      try {
        const response = await this.axios.get("recipes/random/3");
        return response.data;
      } catch (error) {
        this.$root.toast("Input Error", error.message, "danger");
      }
    },
    async getLastViewedRecipes() {
      try {
        const response = await this.axios.get("recipes/viewed/3");
        return response.data;
      } catch (error) {
        this.$root.toast("Input Error", error.message, "danger");
      }
    },
    async getData() {
      this.randomRecipes = await this.getRandomRecipes();
      if (this.$root.store.username)
        this.lastViewedRecipes = await this.getLastViewedRecipes();
    },
    async changeRandomRecipes() {
      this.randomRecipes = await this.getRandomRecipes();
    }
  }
};
</script>

<style scoped>

</style>
