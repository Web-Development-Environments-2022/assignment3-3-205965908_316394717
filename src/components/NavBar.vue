<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
    <b-row style="width: 100%">
      <b-col cols="3">
        <router-link :to="{ name: 'main' }" class="navbar-brand">The recipes of Grandma</router-link>
      </b-col>

      <b-col cols="6">
        <div class="navbar-collapse">
          <ul class="navbar-nav mr-auto ml-auto">
            <li class="nav-item">
              <router-link :to="{ name: 'main' }" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
            </li>
            <li v-if="$root.store.username" class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">My Data</a>
              <div class="dropdown-menu" v-bind:class="{ show: showDropdown }" aria-labelledby="navbarDropdown">
                <router-link :to="{ name: 'myRecipes' }" class="dropdown-item">My recipes</router-link>
                <router-link :to="{ name: 'familyRecipes' }" class="dropdown-item">Family</router-link>
                <!--<div class="dropdown-divider"></div>-->
                <router-link :to="{ name: 'favorites' }" class="dropdown-item">Favorite</router-link>
              </div>
            </li>
            <li v-if="$root.store.username" class="nav-item">
              <i v-b-modal.modal-1 class="nav-link">Create Recipe</i>
              <ModalCreateRecipe id="modal-1"></ModalCreateRecipe>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'cart' }" class="nav-link">Cart({{ $root.numberOfItemsInCart }})</router-link>
            </li>
          </ul>
        </div>
      </b-col>
      <b-col cols="3">
        <div style="float: right">
          <span v-if="!$root.store.username"><strong>Hey Guest! </strong>
            <button class="btn btn-outline-danger my-2 my-sm-0" @click="$router.push('register')">Register</button>
            <button class="btn btn-outline-success my-2 my-sm-0" @click="$router.push('login')">Login</button>
          </span>
          <span v-else> <strong>Hey {{ $root.store.username }}! &nbsp;&nbsp;&nbsp;&nbsp;</strong>
            <button class="btn btn-outline-danger my-2 my-sm-0" @click="Logout">Logout</button>
          </span>
        </div>
      </b-col>
    </b-row>
  </nav>


</template>

<script>
import ModalCreateRecipe from "@/components/ModalCreateRecipe";

export default {
  name: "NavBar",
  components: { ModalCreateRecipe },
  data() {
    return {
      showDropdown: false
    };
  },
  methods: {
    async Logout() {
      try {
        const response = await this.axios.post("Logout");
        this.$root.store.logout();
        this.$root.toast("Logout", "User logged out successfully", "success");
        this.$router.replace("/").catch(() => {
          this.$forceUpdate();
        });
      } catch (err) {
        this.$root.toast("Error", err.response.data.message, "danger");
      }
    },
    DropDownToggle() {
      this.showDropdown = !this.showDropdown;
    }
  }
};
</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a .router-link-exact-active {
  color: #42b983;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-menu {
  display: block;
}


</style>
