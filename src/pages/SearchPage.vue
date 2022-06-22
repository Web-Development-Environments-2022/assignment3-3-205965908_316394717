<template>
  <div class="container">
    <Header title="Search"></Header>
  </div>
</template>


<script>
import Header from "@/components/Header";
export default {
  name: "SearchPage",
  components: { Header },
  data() {
    return {
      form: {
        query: undefined,
        cuisine: undefined,
        diet: undefined,
        intolerances: undefined,
        sort: undefined,
        sortDirection: undefined,
        submitError: undefined
      }
    };
  },
  methods: {
    async Search() {
      const queryParams =
        {

        };
      try {
        const response = await this.axios.get(
          // this.$root.store.server_domain +
          "http://127.0.0.1:80/recipes",
          {
            params: queryParams
          }
        );
        console.log(response);
      } catch (err) {
        console.log(err.response);
        this.form.submitError = err.response.data.message;
      }
    },
  }
};
</script>

<style scoped>

</style>
