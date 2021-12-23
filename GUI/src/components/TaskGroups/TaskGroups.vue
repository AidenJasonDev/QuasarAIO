<script>
export default {
    name: 'TaskGroups',
    props :{
        taskGroups: Array
    },
}
</script>

<template>
    <div class="taskGroup" :key="taskGroup.id" v-for="taskGroup in taskGroups" >
        <p>HI</p>
    </div>
</template>

<style scoped>

</style>