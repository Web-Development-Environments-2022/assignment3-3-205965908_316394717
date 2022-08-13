<template>
  <div v-if="responseData.results && responseData.results.length !== 0">
    <RecipesPreviewShow :recipes="responseData.results" :in-db="inDb"
                        :key="loadCounter"></RecipesPreviewShow>
    <br>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item"><a class="page-link" @click="goToPage('1')">First</a></li>
        <li class="page-item"><a class="page-link" @click="goToPage('prev')">Previous</a></li>
        <li v-if="currentPage > 10 + 1" class="page-item disabled"><a class="page-link">...</a></li>
        <li v-for="n in getNumbersRange()" :key="n" :class="currentPage === n ? 'page-item active' : 'page-item'">
          <a class="page-link" @click="goToPage(n)">{{ n }}</a>
        </li>
        <li v-if="currentPage < Math.ceil(responseData.totalResults / limit) - 10"
            class="page-item disabled"><a class="page-link">...</a></li>
        <li class="page-item"><a class="page-link" @click="goToPage('next')">Next</a></li>
        <li class="page-item"><a class="page-link"
                                 @click="goToPage(Math.ceil(responseData.totalResults / limit))">Last</a>
        </li>
        <li id="limit-title">&nbsp;&nbsp;Limit:</li>
        <li>
          <select class="page-link" v-model="limit" @change="goToPage('1', true)">
            <option :value="5" selected>5</option>
            <option :value="10">10</option>
            <option :value="15">15</option>
          </select>
        </li>
      </ul>
    </nav>
  </div>
  <div v-else><h3>No Data To Show...</h3></div>
</template>

<script>
import RecipesPreviewShow from "@/components/RecipesPreviewShow";

export default {
  components: { RecipesPreviewShow },
  props: {
    getData: { required: true },
    inDb: { type: Boolean, required: true }
  },
  data() {
    return {
      currentPage: 1,
      limit: 5,
      responseData: [],
      loadCounter: 0
    };
  },
  async created() {
    console.log("created");
    this.responseData = await this.getData(this.currentPage, this.limit);
  },
  updated() {
    console.log("updated");
  },
  methods: {
    async goToPage(n, reload = false) {
      let prevPage = this.currentPage;
      if (n === "next")
        this.currentPage = this.currentPage + 1;
      else if (n === "prev")
        this.currentPage = this.currentPage - 1;
      else this.currentPage = parseInt(n);

      if (this.currentPage < 1) this.currentPage = 1;
      else if (this.currentPage > Math.ceil(this.responseData.totalResults / this.limit))
        this.currentPage = Math.ceil(this.responseData.totalResults / this.limit);

      if (prevPage !== this.currentPage || reload) {
        this.responseData = await this.getData(this.currentPage, this.limit);
        this.loadCounter++;
      }
    },
    getNumbersRange() {
      let start = Math.max(1, this.currentPage - 10);
      let stop = Math.min(this.currentPage + 10, Math.ceil(this.responseData.totalResults / this.limit));
      let array = new Array(stop - start + 1).fill(start).map((n, i) => n + i);
      return array;
    }
  }
};
</script>

<style scoped>
#limit-title {
  position: relative;
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #007bff;
}
</style>