<script>
export default {
    name: 'TaskGroup',
    props: {
        taskGroup: Object
    }
}
</script>

<template>
    <div class="taskGroup">
        <div class="productImage">

        </div>
        <p id="groupName">{{ taskGroup.name }}</p>
        <p id="groupSite">{{ taskGroup.site }}</p>
        <div class="status">
            <div id="statIcon"></div>
            <p id="statusDesc"></p>
        </div>
    </div>
</template>

<style scoped>
.taskGroup {
    background-color: #424156;
    border: 2px solid #575672;
    width: 194px;
    height: 56px;

    margin-left: 6px;
    margin-bottom: 7px;

    border-radius: 4px;
    display: flex;
}
.productImage {
    width: 30px;
    height: 30px;
    background-color: #343346;
    border: 2px solid #575672;
    margin: 5px;
    border-radius: 4px;
}
#groupName {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #EAEAEA;
    font-size: 14px;
    font-weight: 600;
    margin: 8px;
    margin-left: 2px;
    float: left;
}
#groupSite {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: #929292;
    font-size: 10px;
    font-weight: 600;

    margin-left: 2px;
    float: left;

}
</style>