<script>
import TaskGroup from './TaskGroup.vue'
export default {
    name:"TaskGroups",
    components: {
        TaskGroup,
    }
}
</script>

<template>
    <div class="taskGroups" :key="taskGroup.id" v-for="taskGroup in taskGroups" >
        <TaskGroup :taskGroup="taskGroup" />
    </div>
</template>

<style>

</style>