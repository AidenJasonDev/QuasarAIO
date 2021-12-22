
<script>
import auth from '../js/auth/auth'
export default {
  name: "Auth",
  components: {  },
  data() {
      return {
        status: ''
      }
  },
  methods: { 
        async login(email, password) {
       
          try{
            let res = await auth(email, password)
            
            if(res == 'Logged in successfully') {
                this.status = res
                setTimeout(() => {this.$router.push({path: '/home'})}, 1000)
                
            }
            else {
                console.log(res)
                this.status = res
            }
          }
          catch(err) {
              console.log(err)
              this.status = 'Login Error, Contact and Admin'
          } 
      }
  },

};

</script>


<template>
  <div class="Auth">
      <div class="logo">
        <img src="../assets/logo.png" alt="" style="width:121px;height:105px" class="logoImg bounce">
      </div>
      <div class="login">
          <div class="authPage">
              <p id="authTitle">Welcome To QuasarAIO</p>
          </div>

        <input v-model="email" class="inputs" id="email" type="text" placeholder="Email Address">
        <input v-model="password" class="inputs" id="pass" type="text" placeholder="Password">

          <div class="submit" @click="login(email, password)">
            <i class="fas fa-paper-plane"></i>          
          </div>
          <div class="status" v-bind:style="{ }">
              <p>{{ status }}</p>
          </div>
      </div>
  </div>
</template>

<style>
::placeholder {
    color: #424156;
    font-weight: 650;
}
::placeholder:focus{
    color: #2A2838;
}
.status {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 500;
}
.Auth {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: #2A2838;
    
    justify-items: center;
}
.submit {
    height: 24px;
    width: 208px;
    background-color: #6A6FED;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 4px;
    padding: 5px;

    color: #EAEAEA;
            align-items: center;
    display: flex;
    justify-content: center;
}
.submit:hover {
    cursor: pointer;
    background-color: #7277FF;
    transition: 0.3s ease-in-out;
}
.login{
    display: flex;
    flex-direction: column;
    position: absolute;
    height: 100%;
    max-height: 100%;
    width: 67%;
    max-width: 67%;
    margin-left: auto;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #2A2838;
        align-items: center;
    justify-content: center;
    
}
.inputs {
          width: 200px;
    border: 2px solid #424156;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #2A2838;
    color: #666582;
    transition: 0.2s;
}
.inputs:hover {
     border-color: rgba(106,111,237,0.6);
}
.inputs:focus {
          border-color: #6A6FED;
    box-shadow: 0 0 3px 0#6A6FED;
    color: #EAEAEA;
}
.logo{
    position: absolute;
    height: 100%;
    max-height: 100%;
    width: 33%;
    max-width: 33%;

    background-color: #343346;

    align-items: center;
    display: flex;

}
.logoImg {
    margin-left: auto;
    margin-right: auto;
         user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
                animation-duration: 4s;
        animation-iteration-count: infinite;
}
.bounce {
    animation-name: bounce-2;
        animation-timing-function: ease;
}
@keyframes bounce-2 {
        0%   { transform: translateY(0); }
        50%  { transform: translateY(-100px); }
        100% { transform: translateY(0); }
}
#authTitle {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    color: #EAEAEA;
    margin-right: 30px;
             user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}
</style>