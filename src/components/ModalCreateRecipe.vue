<template>
  <b-modal id="modal-1" title="Create Recipe" class="my-modal" hide-footer>
    <div class="modal-content">
      <div class="modal-body p-4">
        <form >
          <!-- Text input -->
          <div class="form-outline mb-4">
            <label class="form-label" for="form6Example3" style="margin-left: 0px;">Title</label>
            <input type="text" id="form6Example3" class="form-control" v-model="titleInput">
            
            <div class="form-notch">
              <div class="form-notch-leading" style="width: 9px;"></div>
              <div class="form-notch-middle" style="width: 29px;"></div>
              <div class="form-notch-trailing"></div>
            </div>
          </div>
          <!-- 2 column grid layout with text inputs for the first and last names -->
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                 <label class="form-label" for="form6Example1" style="margin-left: 0px;">Ready
                  In Minutes: {{ readyInMinutesInput }}</label>
                <input type="range" min="0" max="180" id="form6Example1" class="form-control" v-model="readyInMinutesInput">
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example2" style="margin-left: 0px;">Servings: {{ servingInput }}</label>
                <input type="range" min="0" max="20" id="form6Example2" class="form-control" v-model="servingInput">
              </div>
            </div>
          </div>
          <!-- Text input -->

          <!-- <div class="form-outline mb-4">
            <input type="text" id="form6Example4" class="form-control">
            <label class="form-label" for="form6Example4" style="margin-left: 0px;">Ready In Minutes</label>
          <div class="form-notch"><div class="form-notch-leading" style="width: 9px;"></div><div class="form-notch-middle" style="width: 55.2px;"></div><div class="form-notch-trailing"></div></div></div>
       -->
          <input style="margin-left:30px" type="checkbox" id="Vegetarian" value="Vegetarian" v-model="isVegetarian">
          <label style="margin-left:5px" for="Vegetarian"> Vegetarian </label>
          <input style="margin-left:50px" type="checkbox" id="Vegan" value="Vegan" v-model="isVegan">
          <label style="margin-left:5px" for="Vegan"> Vegan </label>
          <input style="margin-left:50px" type="checkbox" id="GlutenFree" value="Gluten Free" v-model="isGlutenFree">
          <label style="margin-left:5px" for="GlutenFree"> GlutenFree </label>
          <!-- <span>Checked names: {{ checkedNames }}</span> -->
          <input style="margin-left:30px" type="checkbox" id="family" value="family" v-model="isFamily">
          <label style="margin-left:5px" for="family"> Family Recipe </label>
          
          
          <div v-if="isFamily === true" class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example6" style="margin-left: 0px;">Invented By</label>
                <input type="text" id="form6Example6" class="form-control" v-model="inventedByInput">
                
                <div class="form-notch">
                  <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 80px;"></div>
                  <div class="form-notch-trailing"></div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <label class="form-label" for="form6Example7" style="margin-left: 0px;">Serve Day</label>
                <input type="text" id="form6Example7" class="form-control" v-model="serveDayInput">
                
                <div class="form-notch">
                  <div class="form-notch-leading" style="width: 9px;"></div>
                  <div class="form-notch-middle" style="width: 60px;"></div>
                  <div class="form-notch-trailing"></div>
                </div>
              </div>
            </div>
          </div>
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
          <!-- <component v-for="field in fields" v-bind:is="field.type" :key="field.id"></component> -->
          <component v-bind:instructionCounter="index+1" v-for="(InstructionInputModal, index) in instructionComponent" :key="index" :is="InstructionInputModal"/>
          <button  @click="addInstruction" class="btn btn-secondary btn-block">Add Instruction</button>
          <!-- <InstructionInputModal v-bind:instructionCounter="instructionCounter"></InstructionInputModal> -->
          <button @click="removeInstruction" class="btn btn-danger btn-block">Remove All Instructions</button>
          
          <button @click="submit" class="btn btn-primary btn-block">Create Recipe</button>
        </form>
      </div>
    </div>
  </b-modal>
</template>

<script>
import InstructionInputModal from './InstructionInputModal';
export default {
  name: "ModalCreateRecipe",  
  mounted(){window.vue = this},
  props: [],
  data() {
    return {
      instructionComponent: [],
      titleInput: "Default Recipe Title",
      readyInMinutesInput: 0,
      servingInput: 0,
      isVegetarian: false,
      isVegan: false,
      isGlutenFree: false,
      isFamily: false,
      inventedByInput: "Default Invented By",
      serveDayInput: "Default Serve Day"
    };
  },
  methods: {
  	addInstruction ()  {
    	this.instructionComponent.push(InstructionInputModal)

    },
    removeInstruction ()  {
    	this.instructionComponent = []
    },
    submit(){
      console.log(this.instructionComponent, this.titleInput,
      this.readyInMinutesInput,
      this.servingInput,
      this.isVegetarian,
      this.isVegan,
      this.isGlutenFree,
      this.isFamily,
      this.inventedByInput,
      this.serveDayInput)
    }
  
    }};
</script>

<style scoped>
.my-modal {
  max-width: 90% !important;
}
</style>