<script>
import taskGroup from './TaskGroup.vue'
export default {
    name:"taskGroups",
    props: {
        tasks: Array
    },
    components: {
        taskGroup
    }
}
</script>

<template>
    <div :key="taskGroup.id" v-for="taskGroup in taskGroups">
        <taskGroup :taskGroup="taskGroup"/>
    </div>
</template>

<style>
p { 
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 14px;
}

</style>