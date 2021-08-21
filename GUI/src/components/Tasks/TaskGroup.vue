<script>
export default {
    name: "TaskGroup",
    props: {
        TaskGroups: Object
    }
}
</script>
<template>
    <div class="group">
        <p class="groupTitle">{{ taskGroup.name }}</p>
        <p class="groupSite">{{ taskGroup.site }}</p>
        <div class="taskCounter">{{ taskGroup.taskCount }}</div>
        <i class="fas fa-trash"></i>
    </div>
</template>

<style scoped>
.groupTitle {
    color: #EAEAEA;
}
.group {
    height: 50px;
    max-height: 50px;
    width: 168px;
    max-width: 168px;
    background-color: #424156;
    margin: 10px;
    border-radius: 4px;
    
}
.group:hover {
      cursor: pointer;
  box-shadow: 0px 0px 10px #6A6FED;
  transition: 0.25s ease-in-out;
      border: 1px solid #6A6FED;
}
.group:active {
        border: 2px solid #6A6FED;
}
.fa-trash {
    margin-top: 29px;
    margin-right: 5px;
    float: right;
    right: 0;
    bottom: 0;
    color: #696881;
}
.fa-trash:hover {
    cursor: pointer;
    color: #FF1887;
    transition: 0.2s ease-in-out; 
}
</style>