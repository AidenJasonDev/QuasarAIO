<script>
export default {
    name:"taskGroup",
    props: {
        taskGroup: Object
    }
}
</script>

<template>
    <div class="taskgroup">
        <p>{{ taskGroup.groupName }}</p>
        <p>{{ taskGroup.site }}</p>
        <p>{{ taskGroup.tasks.length }}</p>
        <div class="deleteTaskGroup">
            <i class="fas fa-trash"></i>
        </div>
    </div>

</template>

<style scoped>

</style>