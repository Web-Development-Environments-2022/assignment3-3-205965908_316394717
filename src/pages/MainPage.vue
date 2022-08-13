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
        <RecipePreviewList title="Random Recipes" :recipes="randomRecipes || []" class="RandomRecipes center" />
      </b-col>
      <b-col cols="6">
        <strong>
          <b-container>
            <p>Welcome to the best website across the universe for food and recipes!</p>
            <p>Our website is full of great taste recipes that are just waiting for your next meal.</p>
            <p>Take a short registration and enjoy the full functionality available on our site.</p>
            <p>If you are coming to Netanya city, don't forget to visit in the best restaurant in town:</p>
            <img src="https://images.rest.co.il/Customers/80257072/2d6368774beb41aa91a91ac5c5a4e23f.jpg">

          </b-container>
        </strong>

      </b-col>
      <b-col cols="3">
        <Login v-if="!$root.store.username"></Login>

        <RecipePreviewList v-else title="Last Viewed Recipes" :recipes="lastViewedRecipes || []"
                           :class="{RandomRecipes: true, blur: !$root.store.username, center: true}"
                           disabled></RecipePreviewList>
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
  methods: {
    async GetRandomRecipes() {
      try {
        const response = await this.axios.get("recipes/random/3");
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
    async GetLastViewedRecipes() {
      try {
        const response = await this.axios.get("recipes/viewed/3");
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    }
  },
  async mounted() {
    this.randomRecipes = await this.GetRandomRecipes();
    if (this.$root.store.username)
      this.lastViewedRecipes = await this.GetLastViewedRecipes();
    else
      this.lastViewedRecipes = await this.GetRandomRecipes();
  }
};
</script>

<style scoped>

.RandomRecipes {
  margin: 10px 0 10px;
}

.blur {
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(2px);
}

::v-deep .blur .recipe-preview {
  pointer-events: none;
  cursor: default;
}
</style>
