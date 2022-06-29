<template>
  <div v-if="responseData.results && responseData.results.length !== 0">
    <RecipesPreviewShow :recipes="responseData.results" :key="responseData.results[0].id"></RecipesPreviewShow>
    <br>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="goToPage('1')">First</a></li>
        <li class="page-item"><a class="page-link" @click="goToPage('prev')">Previous</a></li>
        <li v-if="currentPage > 10" class="page-item disabled"><a class="page-link">...</a></li>
        <li v-for="n in getNumbersRange()" :key="n" :class="currentPage === n ? 'page-item active' : 'page-item'">
          <a class="page-link" @click="goToPage(n)">{{ n }}</a>
        </li>
        <li v-if="currentPage < Math.ceil(responseData.totalResults / limit) - 10"
            class="page-item disabled"><a class="page-link">...</a></li>
        <li class="page-item"><a class="page-link" @click="goToPage('next')">Next</a></li>
        <li class="page-item"><a class="page-link"
                                 @click="goToPage(Math.ceil(responseData.totalResults / limit))">Last</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import RecipesPreviewShow from "@/components/RecipesPreviewShow";

export default {
  components: { RecipesPreviewShow },
  props: {
    getData: { required: true },
    wait: { type: Boolean, required: true }
  },
  data() {
    return {
      currentPage: 1,
      limit: 10,
      responseData: []
    };
  },
  async mounted() {
    if (this.wait === false)
      this.responseData = await this.getData(this.currentPage, this.limit);
  },
  methods: {
    async goToPage(n) {
      let prevPage = this.currentPage;
      if (n === "next")
        this.currentPage = this.currentPage + 1;
      else if (n === "prev")
        this.currentPage = this.currentPage - 1;
      else {
        n = parseInt(n);
        if (n < 1)
          this.currentPage = 1;
        else if (n > Math.ceil(this.responseData.totalResults / this.limit))
          this.currentPage = Math.ceil(this.responseData.totalResults / this.limit);
        else
          this.currentPage = n;
      }
      if (this.currentPage < 1)
        this.currentPage = 1;
      else if (this.currentPage > Math.ceil(this.responseData.totalResults / this.limit) + 1)
        this.currentPage = Math.ceil(this.responseData.totalResults / this.limit);
      if (prevPage !== this.currentPage)
        await this.getData();
    },
    getNumbersRange() {
      let start = Math.max(1, this.currentPage - 10);
      let stop = Math.min(this.currentPage + 10, Math.ceil(this.responseData.totalResults / this.limit));
      return new Array(stop - start).fill(start).map((n, i) => n + i);
    }
  }
};
</script>

<style scoped></style>