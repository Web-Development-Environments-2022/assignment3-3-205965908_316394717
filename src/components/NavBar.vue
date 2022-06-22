<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link :to="{ name: 'main' }" class="navbar-brand">The recipes of Grandma and others</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'main' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'search' }" class="nav-link">Search</router-link>
        </li>
        <span v-if="$root.store.username">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">My Data</a>
            <div class="dropdown-menu" v-bind:class="{ show: showDropdown }" aria-labelledby="navbarDropdown">
              <router-link :to="{ name: 'profile' }" class="dropdown-item">Profile</router-link>
              <div class="dropdown-divider"></div>
              <router-link :to="{ name: 'favorite' }" class="dropdown-item">Favorite</router-link>
              <router-link :to="{ name: 'family' }" class="dropdown-item">Family</router-link>
            </div>
          </li>
          </span>
      </ul>
      <div>
          <span v-if="!$root.store.username"><strong>Hey Guest! </strong>
            <button class="btn btn-outline-danger my-2 my-sm-0" @click="$router.push('register')">Register</button>
            <button class="btn btn-outline-success my-2 my-sm-0" @click="$router.push('login')">Login</button>
          </span>
        <span v-else> <strong>Hey {{ $root.store.username }}!</strong>
            <button class="btn btn-outline-danger my-2 my-sm-0" @click="Logout">Logout</button>
          </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      showDropdown: false
    }
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.push("/").catch(() => {
        this.$forceUpdate();
      });
    },
    DropDownToggle(){
      this.showDropdown = ! this.showDropdown;
    },
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
