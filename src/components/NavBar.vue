<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">
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
        <li class="nav-item">
          <b-button v-b-modal.modal-1>Create recipe</b-button>

           <b-modal id="modal-1" title="Create recipe" hide-footer>

          <div class="modal-content">
            <div class="modal-body p-4">
              <form>
                

                <!-- Text input -->
                <div class="form-outline mb-4">
                  <input type="text" id="form6Example3" class="form-control">
                  <label class="form-label" for="form6Example3" style="margin-left: 0px;">Title</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 29px;"></div><div class="form-notch-trailing"></div></div></div>
                
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row mb-4">
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form6Example1" class="form-control">
                      <label class="form-label" for="form6Example1" style="margin-left: 0px;">Ready In Minutes</label>
                    <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 103px;"></div><div class="form-notch-trailing"></div></div></div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="form6Example2" class="form-control">
                      <label class="form-label" for="form6Example2" style="margin-left: 0px;">Servings</label>
                    <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 52px;"></div><div class="form-notch-trailing"></div></div></div>
                  </div>
                </div>
                <!-- Text input -->
                
                <!-- <div class="form-outline mb-4">
                  <input type="text" id="form6Example4" class="form-control">
                  <label class="form-label" for="form6Example4" style="margin-left: 0px;">Ready In Minutes</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>
             -->
                <input style="margin-left:30px" type="checkbox" id="Vegetarian" value="Vegetarian" v-model="checkedNames">
                <label style="margin-left:5px" for="Vegetarian"> Vegetarian </label>
                <input style="margin-left:50px" type="checkbox" id="Vegan" value="Vegan" v-model="checkedNames">
                <label style="margin-left:5px" for="Vegan"> Vegan </label>
                <input style="margin-left:50px" type="checkbox" id="GlutenFree" value="GlutenFree" v-model="checkedNames">
                <label style="margin-left:5px" for="GlutenFree"> GlutenFree </label>
                <br>
                <!-- <span>Checked names: {{ checkedNames }}</span> -->
                <input style="margin-left:30px" type="checkbox" id="family" value="family" v-model="checkedNames">
                <label style="margin-left:5px" for="family"> Family Recipe </label>
                <!-- Number input -->
                <!-- <div class="form-outline mb-4">
                  <input type="number" id="form6Example6" class="form-control">
                  <label class="form-label" for="form6Example6" style="margin-left: 0px;">Phone</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 44px;"></div><div class="form-notch-trailing"></div></div></div> -->

                <!-- Message input -->
                <!-- <div class="form-outline mb-4">
                  <textarea class="form-control" id="form6Example7" rows="4"></textarea>
                  <label class="form-label" for="form6Example7" style="margin-left: 0px;">Additional information</label>
                <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 135.2px;"></div><div class="form-notch-trailing"></div></div></div> -->

                <!-- CHECK BOX! -->
                <!-- Checkbox
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked="">
                  <label class="form-check-label" for="form6Example8"> Create an account? </label>
                </div> -->

                <!-- Submit button -->
                <button type="submit" class="btn btn-primary btn-block">Create Recipe</button>
              </form>
            </div>
          </div>
          </b-modal>
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
      checkedNames: [],
      showDropdown: false
    }
  },
  methods: {
    Logout() {
      this.$root.store.logout();
      this.$root.toast("Logout", "User logged out successfully", "success");
      this.$router.replace("/").catch(() => {
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
