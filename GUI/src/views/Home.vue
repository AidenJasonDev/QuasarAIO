<script>
import TaskGroups from '../components/Elements/TaskGroup/TaskGroup.vue'
export default {
  name: "Home",
  components: { TaskGroups },
    methods: {
    createTaskGroup() {
      console.log('Task Group Created!');
    }
  },
  data() {
    return {

      showModal: false,
      id: "",
      groupName: "",
      site: "",
      active: false,
      groupArr: [],

      taskGroups: [

      ],
    }
  },
  created() {
    this.taskGroups = [
      {
        id: 1,
        name: "Test",
        site: 'Footlocker US',
        active: false
      },
      {
        id: 2,
        name: "Test2",
        site: 'ChampsSports',
        active: false
      },
            {
        id: 3,
        name: "Test3",
        site: 'Footaction',
        active: false
      }
    ]
  },

}

</script>


<template>

  <div class="Home">
    <div class="taskGroupList">
      <div class="taskGroupTitle">
        <p id="tabTitle">Tasks</p>
        <div id="createTaskGroups_BTN" @click="showModal = true">
          <i class="fas fa-plus"></i>
        </div>
      </div>
      <hr>
      <div class="taskGroups">
        <TaskGroups :taskGroups="taskGroups" />
      </div>
    </div>
    <div class="taskList">

    </div>
    <transition name="fade" >
      <div class="modalOverlay" v-if="showModal" @click="showModal = false">
      </div>
    </transition>
      <div class="createTaskGroupModal" v-if="showModal">
        <p id="createTaskGroupTitle">Create Task Group</p>
        <input id="createTaskGroupName" type="text" v-model="groupName" placeholder="Task Group Name">
        <select name="siteSelect" id="siteSelect" v-model="site">
          <option value="Kith">Kith</option>
          <option value="Undefeated">Undefeated</option>
          <option value="CNCPTS">CNCPTS</option>
          <option value="Custom Shopify">Custom Shopify</option>
          <option value="Footlocker">Footlocker</option>
          <option value="Footaction">Footaction</option>
          <option value="Champs Sports">Champs Sports</option>
          <option value="Eastbay">Eastbay</option>
          <option value="kids Footlocker">kids Footlocker</option>
        </select>
        <div class="createTaskGroupActionButtons">
          <div class="createTaskGroup_BTN" @click="createTaskGroup">
            <i class="fas fa-check"></i>
          </div>
          <div class="exitCreateTaskGroup_BTN" @click="showModal = false">
             <i class="fas fa-times"></i>
          </div>
        </div>

      </div>
  </div>
</template>

<style >
hr { 
  border: 1px solid #424156;
}
.Home {
  width: 100%;
  height: 100%;
  display: flex;
}
.taskGroupList {
  width: 210px;
  min-width: 210px;
  max-width: 210px;
  height: 582px;
  min-height: 582px;
  max-height: 100%;

  background-color: #343346;
  border-radius: 4px;

  float: left;
  margin-right: 5px;
  
}

.taskList {
  width: 150%;
  height: 582px;

  background-color: #2A2838;

  float: left;
  margin-left: 5px;
}
.taskGroupTitle {
  display: flex;
  align-items: center;
  justify-content: center;
}
.fa-plus {
  height: 10px;
  width: 10px;

  color: #EAEAEA;
  margin-bottom: 4px;
}
.modalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;

  cursor: pointer;
  background-color: rgba(0,0,0,0.3);

  justify-items: center;
}
.fade-enter-active,
.fade-leave-active {
  transition:  0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.createTaskGroupModal {
  position: fixed;

  width: 280px;
  height: 190px;

  background-color: #343346;
  border-radius: 4px;

  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 99;

}
.createTaskGroup_BTN {
    background-color: #63CAD8;
    color: #EAEAEA;
    width: 48px;
    height: 24px;
    border-radius: 4px;
    padding: 5px;
    margin-left: 8px;

  float: right;
  bottom: 0px;
  right: 0;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 10px;
}
.createTaskGroup_BTN:hover {
    cursor: pointer;
    background-color: #6DDCEB;
    transition: 0.3s ease-in-out;
}
.fa-check {
  margin-top: 12px;
  margin-left: 18px;
  transform: translate(-50%,-50%);
}
.exitCreateTaskGroup_BTN {
    background-color: #FF605C;
    color: #EAEAEA;
    width: 48px;
    height: 24px;
    border-radius: 4px;
    padding: 5px;
    margin-left: 8px;

      float: right;
  bottom: 0px;
  right: 0;
  margin-right: 5px;
  margin-top: 10px;

}
.exitCreateTaskGroup_BTN:hover {
    cursor: pointer;
    background-color: #FF706C;
    transition: 0.3s ease-in-out;
}
.fa-times {
  margin-top: 12px;
  margin-left: 12px;
  transform: translate(-50%,-50%);
}
.createTaskGroupActionButtons {
  margin-top: 0px;
  float: right;
  bottom: 0;
  right: 0;
}
#tabTitle {
  color: #EAEAEA;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 600;

  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  margin: 10px;
}
#createTaskGroups_BTN {
  width: 14px;
  height: 14px;

  background-color: #424156;
  border-radius: 3px;

  margin-left: -4px;
  margin-top: 6px;

}
#createTaskGroups_BTN:hover {
  cursor: pointer;
  background-color: #54536D;
  transition: 0.3s ease-in-out;
}
#createTaskGroupTitle {
  color: #EAEAEA;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: 600;

  user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -o-user-select: none;

  margin: 10px;
}
#createTaskGroupName {
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

    float: left;
}
#createTaskGroupName:focus {
      border-color: #6A6FED;
    box-shadow: 0 0 3px 0#6A6FED;
    color: #EAEAEA;
}
#siteSelect {
  outline: none;
    width: 220px;
    border: 2px solid #424156;
    border-radius: 4px;
    outline: none;
    padding: 7px;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #2A2838;
    color: #666582;
    transition: 0.2s;

    float: left;
}
#siteSelect:focus {
        border-color: #6A6FED;
    box-shadow: 0 0 3px 0#6A6FED;
    color: #EAEAEA;

}
 </style>