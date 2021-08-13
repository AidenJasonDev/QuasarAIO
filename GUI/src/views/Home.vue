<script>
import { ref } from 'vue'
//import taskConfig from '../config/Tasks.json'
//import Tasks from '../components/Tasks/Tasks.vue'
import TaskGroups from '../components/Tasks/TaskGroups.vue'
export default {
  name: "Home",
  components: { TaskGroups },
  setup () {
    const popupTriggers = ref ({
      buttonTrigger: false,
    })
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }
    return { 
      popupTriggers,
      TogglePopup
    }
  },
  methods: { 
    addTaskGroup() {
      console.log('New Task Group Added')
    }
  },
  taskGroupData() {
    return { 
      taskGroups: [  ]
    }
  },
  taskGroupCreated() {
    this.taskGroups = [
    {
        "id": "cc48d19c-bcb4-4b73-b801-3d9bda750c35",
        "groupName": "Test",
        "site": "Footlocker",
        "tasks": [{
            "34094843-1166-4eaf-86e3-665e50712634": {
                "id": "34094843-1166-4eaf-86e3-665e50712634",
                "SKU": "FY4567",
                "size": "Random",
                "proxyListID": "5032ce1f-8a03-4698-84a0-4348a4c8c454",
                "profileID": "c7eaf8fa-984d-4117-b03a-620c4473fb85"
            }
        }]
    }
  ]
  }
};

</script>


<template>

  <div class="home">
    <div class="groups">
      <p id="desc">Tasks</p>
      <div class="taskGroups">
        <div class="createTaskGroups">
          <div id="createGroupBTN" @click="() => TogglePopup('buttonTrigger')" >
            <i class="fas fa-plus"></i>
        </div>
        </div>
      </div>
    </div>
    <div class="tasks">
      <div class="actionButtons">
        <div id="addTasks" >
          <i class="fas fa-plus"></i>
        </div>
          
        <div id="editAllTasks">
          <i class="fas fa-pen"></i>
        </div>
        <div id="startAllTasks">
          <i class="fas fa-play"></i>
        </div>
        <div id="stopAllTasks">
          <i class="fas fa-stop"></i>
        </div>
        <div id="deleteAllTasks">
          <i class="fas fa-trash"></i>
        </div>
        <div id="importTasks">
          <i class="fas fa-download"></i>
        </div>
        <div id="exportTasks">
          <i class="fas fa-upload"></i>
        </div>
      </div>
      <div class="headers">
        <p id="headerOne" >Product</p>
        <p id="headerTwo">Size</p>
        <p id="headerThree" >Proxy</p>
        <p id="headerFour" >Profile</p>
        <p id="headerFive" >Status</p>
      </div>
      <div class="taskList">
        <TaskGroups :taskGroups="taskGroups"/>

      </div>
    </div>
    <div class="createTaskGroupPopup" v-if="popupTriggers.buttonTrigger" :closePopup="() => TogglePopup('buttonTrigger')">
      <div class="createTaskGroupPopup-inner" >
        <p id="addTaskGroupTitle">Add Task Group</p>
        <div class="cancelAddTaskGroupBTN" @click="() => TogglePopup('buttonTrigger')">
          <i class="fas fa-times"></i>
        </div>
        <select class="sitesDropdown" name="sites" id="selectSites" >
          <option value="placeholderSite">Site</option>
          <option value="Footlocker US">Footlocker US</option>
          <option value="Champssports">Champssports</option>
          <option value="Footaction">Footaction</option>
          <option value="Eastbay">Eastbay</option>
          <option value="Kids Footlocker">Kids Footlocker</option>
          <option value="Footlocker CA">Footlocker CA</option>
        </select>
        <input class="groupName" type="text" placeholder="Name" spellcheck="false">

        <div class="addTaskGroupBTN" @click="TogglePopup('buttonTrigger'); addTaskGroup() ">
          <i class="fas fa-save"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.taskList {

  width: 100%;
  height: 100%;
}
.createTaskGroupPopup p {
  float: left;
    font-family: Roboto, Arial, sans-serif;
  font-style: normal;



  color: #EAEAEA;


  margin: 50%;

  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.createTaskGroupPopup {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  position:fixed;
  width: 100%;
  height: 100%;
  background-color: #000;
  
  align-items: center;
  justify-content: center;

  opacity: 0.4;
  display: flex;
}
.createTaskGroupPopup-inner {
  width: 308px;
  height: 140px;

  background-color: #2A2838;
  border-radius: 15px;

  overflow: auto;

}

.groupName {
  color: #eaeaea;
  background-color: #343346;
  border: none;
  border-radius: 4px;
  outline: none;

  height: 24px;
  width: 268px;
}
#addTaskGroupTitle {
  top: 0;
  left: 0;
  margin: 10px;
  color: #ffffff;

  display: inline-block;
  font-weight: bold;
}
.cancelAddTaskGroupBTN {
    right: 0;
    height:20px;
    width: 20px;
    margin-top: 5px;
    margin-left: 40%;

  color: #EAEAEA;
  display: inline-block;
}
.cancelAddTaskGroupBTN:hover {
    color: #FF1887;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}

.addTaskGroupBTN {
  width: 48px;
  height: 24px;

  background-image: linear-gradient(90deg, #00D6AF, #7AFFC7);
  border-radius: 35px;
  color: #EAEAEA;

  margin-top: 10px;
  margin-left: px;
    display: inline-block;

}
.addTaskGroupBTN:hover {
  cursor: pointer;
  box-shadow: 0px 0px 5px #7AFFC7;
  transition: 0.1s ease-in-out;
}
.fa-save {
  margin-top: 4px;
}

.sitesDropdown {
  outline: none;

  margin-bottom: 8px;
  background-color: #343346;
  color: #EAEAEA;
  border: none;
  height: 24px;
  width: 272px;
  border-radius: 4px;
}
#desc {
    font-size: 24px;
      font-weight: bold;
}

p { 
  font-family: Roboto, Arial, sans-serif;
  font-style: normal;



  color: #EAEAEA;

  -webkit-user-select: none; /* Safari */        
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */
}
.home {
    max-height: 100%;
    max-width: 100%;
    background-color: #2A2838;
    display: flex;
    position: relative;
}
.groups {
    max-height: 100%;
    width: 214px;
    background-color: #2A2838;
}
.taskGroups {
  margin: 15px;
  background-color: #343346;
  width: 188px;
  height: 490px;
  border-radius: 5px;
  overflow: hidden;

  justify-content: center;
  position: relative;
}

.createTaskGroups {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: 214px;
  height: 70px;
}
#createGroupBTN {
  position: absolute;
  bottom: 0;
  margin: 10px;
  height: 40px;
  width: 168px;
  background-image: linear-gradient(90deg, #6A6FED, #826AED);
  border-radius: 3px;

  color: #EAEAEA;
  padding-top: 10px;

  
}

#createGroupBTN:hover {
    box-shadow: 0px 0px 7px #826AED;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}
.tasks {
  flex: 1;
  background-color: #2A2838;
}

.headers {
  display: flex;

}
.headers p {
  margin-left: 15px;
  margin-right: 10%;
  font-size: 14px;
  font-weight: bold;
}

.actionButtons {
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  display: flex;
  background-color: #2A2838;

  color: #EAEAEA;
}

#addTasks {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(315deg, #6A6FED, #826AED);
  margin-right: 15px;
  margin-left: 42%;
}

#addTasks:hover {
    box-shadow: 0px 0px 7px #826AED;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#editAllTasks {
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #3581D8, #63CAD8);
  margin-right: 15px;

}
#editAllTasks:hover {
    box-shadow: 0px 0px 6px #63CAD8;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#startAllTasks {
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #00D6AF, #7AFFC7);
  margin-right: 15px;

}
#startAllTasks:hover {
    box-shadow: 0px 0px 6px #7AFFC7;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#stopAllTasks {
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #FF6D1B, #FFCD1B);
  margin-right: 15px;

}
#stopAllTasks:hover {
    box-shadow: 0px 0px 6px #FFCD1B;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#deleteAllTasks {
  width: 50px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(45deg, #FF1887, #FF605C);
  margin-right: 15px;

}
#deleteAllTasks:hover {
    box-shadow: 0px 0px 6px #FF605C;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#importTasks {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(315deg, #6A6FED, #826AED);
  margin-right: 15px;
  margin-left: 8%;
}
#importTasks:hover {
    box-shadow: 0px 0px 7px #826AED;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#exportTasks {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-image: linear-gradient(315deg, #6A6FED, #826AED);
  margin-right: 15px;
}
#exportTasks:hover {
    box-shadow: 0px 0px 7px #826AED;
    transition: 0.1s ease-in-out;
    cursor: pointer;
}

#addTasks, .fa-plus {
  margin-top: 7px;
}

#editAllTasks, .fa-pen {
  margin-top: 6px;
}

#startAllTasks, .fa-play {
  margin-top: 6px;
}

#stopAllTasks, .fa-stop {
  margin-top: 6px;
}

#deleteAllTasks, .fa-trash {
  margin-top: 6px;
}

#importTasks, .fa-download {
  margin-top: 5px;
}

#exportTasks, .fa-upload {
  margin-top: 5px;
}

</style>
