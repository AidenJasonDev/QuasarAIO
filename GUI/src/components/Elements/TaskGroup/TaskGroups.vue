<script>
import TaskGroup from './TaskGroup.vue'
export default {
    name: "TaskGroups",
    components: { TaskGroup },
    props: {
        taskGroups: Array
    }
}
</script>

<template>
    <div class="taskGroup" :key="taskGroup.id" v-for="taskGroup in taskGroups">
        <TaskGroup :taskGroup="taskGroup"/>
    </div>
</template>

<style scoped>

</style>