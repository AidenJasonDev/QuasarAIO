<script>
import ProfileGroups from '../components/Profiles/ProfileGroups.vue'
export default {
  name: "Profiles",
  components: { ProfileGroups }
};

</script>

<template>
  <div class="profilesPage">
    <div class="groups">
      <p>Profiles</p>
      <div class="profileGroups">
        <ProfileGroups />
      </div>
    </div>
    <div class="profiles">

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
}
.profilesPage {
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

.profileGroups {
  margin: 15px;
  background-color: #343346;
  width: 188px;
  height: 490px;
  border-radius: 5px;
  overflow: hidden;
}
</style>