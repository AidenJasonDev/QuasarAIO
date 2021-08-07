<script>
import TaskGroups from '../components/Tasks/TaskGroups.vue'
export default {
  name: "Home",
  components: { TaskGroups }
};
</script>


<template>

  <div class="home">
    <div class="groups">
      <p id="desc">Tasks</p>
      <div class="taskGroups">
        <TaskGroups />
        <div id="createGroupBTN">

        </div>
      </div>
    </div>
    <div class="tasks">
      <div class="actionButtons">
        <div id="addTasks">
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

      </div>
    </div>

  </div>
</template>

<style>
#desc {
    font-size: 24px;
      font-weight: bold;
}
.taskGroups {
  margin: 15px;
  background-color: #000;
  width: 188px;
  height: 490px;
  border-radius: 5px;
  overflow: hidden;

  justify-content: center;
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
}
.groups {
    max-height: 100%;
    width: 214px;

}
.tasks {
  flex: 1;
  background-color: #2A2838;
}


#createGroupBTN {
  margin: 10px;
  height: 50px;
  width: 168px;
  background-color: linear-gradient(90deg, #6A6FED, #826AED);
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
  background-color: #2A2838;
  display: flex;

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

.fa-plus {
  margin-top: 7px;
}

.fa-pen {
  margin-top: 6px;
}

.fa-play {
  margin-top: 6px;
}

.fa-stop {
  margin-top: 6px;
}

.fa-trash {
  margin-top: 6px;
}

.fa-download {
  margin-top: 5px;
}

.fa-upload {
  margin-top: 5px;
}
</style>

