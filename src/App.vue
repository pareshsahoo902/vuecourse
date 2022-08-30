<!-- If the volume reaches 16 give a warning -->
<template>
  <div>
  <div>
    <pre>
      {{JSON.stringify(formValues,null,2)}}
    </pre>
  </div>
  <form @submit="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model="formValues.name" />
      <br />
      <label for="bio">Bio</label>
      <textarea id="bio" v-model="formValues.bio" />
      <br />
      <div>
        <label for="country">Country</label>
        <select id="country" v-model="formValues.country">
          <option value="">Select  A country</option>
          <option value="India">India</option>
          <option value="Africa">Africa</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <br />
      <div>
        <label for="socialhandles">Social Network Handles</label>
        <br />
        <select id="socialhandles" multiple v-model="formValues.socialhandles">
          <option value="Facebook">Facebook</option>
          <option value="Twitter">Twitter</option>
          <option value="Instagram">Instagram</option>
          <option value="Snapchat">Snapchat</option>
        </select>
      </div>
      <br />
      <div>
        <label for="gender">Gender</label>
        <br />
        <input type="radio" id="male" v-model="formValues.gender" value="male" />
        <label for="male">Male</label>
        <br />
        <input type="radio" id="female" v-model="formValues.gender" value="female" />
        <label for="female">Female</label>
        <br />
        <input type="radio" id="others" v-model="formValues.gender" value="others" />
        <label for="others">Others</label>
        
      </div>
      <br />
      <div>
        <input type="checkbox" id="above18" v-model="formValues.aboveage" true-value="yes" false-value="no" />
        <label for="above18">I am Above 18?</label>
      </div>
      
    </div>
    <button>Submit</button>
  </form>
</div>
</template>

<script>

export default {
    name: "App",
    methods:{
      submitForm:function(event){
        event.preventDefault();
        console.log("formvalues", this.formValues)

      }
    },
    data(){
      return{
        formValues:{
        name:'',
        bio:'',
        country:'',
        socialhandles:[],
        aboveage:"no"
      }
      }
    
    }
    }
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }
.centerDiv{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
