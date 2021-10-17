<script>
export default {
    name: "NotifCenter"
}
</script>

<template>
    <div class="notifCenter">
        <div class="center">
            <p id="title"> Statuses </p>
        </div>

    </div>
</template>

<style scoped>
.center {
    margin-left: 5px;
    margin-right: 5px;
    background-color: #343346;
    height: 582px;
    width: 170px ;
    min-width: 170px;
    max-width: 170px;
    border-radius: 4px;
}
#title {
    font-weight: 600;
    font-size: 18px;

    margin-top: 10px;
}

</style>