<script>
import ProxyGroups from '../components/Proxies/ProxyGroups.vue'
export default {
  name: "Proxies",
  components: { ProxyGroups }
};

</script>

<template>
    <div class="proxiesPage">
    <div class="groups">
      <p>Proxies</p>
      <div class="proxyGroups">
        <ProxyGroups />
      </div>
    </div>
    <div class="proxies">

    </div>

  </div>
</template>

<style scoped>
p { 
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;

  color: #EAEAEA;
  
  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.proxiesPage {
    max-height: 100%;
    max-width: 100%;
    background-color: #2A2838;
    justify-content: center;
    align-content: center;
}
.groups {
    max-height: 100%;
    width: 214px;

}

.proxyGroups {
  margin: 15px;
  background-color: #343346;
  width: 188px;
  height: 490px;
  border-radius: 5px;
  overflow: hidden;
}
</style>