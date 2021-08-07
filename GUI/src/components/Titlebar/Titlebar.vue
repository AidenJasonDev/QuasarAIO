<script >

</script>

<template>
    <div class="titlebar">
        <div id="logo">
            <img src="./quasar-aio.png" alt="" style="width:54px;height:47px">
        </div>
        <div class="actions">
            <div id="minimizeBTN" @click="onMinimize">
                <i class="fas fa-minus"></i>
            </div>
            <div id="exitBTN" @click="onClose">
                <i class="fas fa-power-off"></i>
            </div>
        </div>

    </div>
</template>

<style>
:root {
    --nabvar-item-hover: #7D7AAE;
    --navbar-item-active: #6A6FED;
    --navbar-item-selected: #8884BD;
    --navbar-item-color: #4E4C71;

    --navbar-bg-color-one: #2A2838;
    --navbar-bg-color-two: #343346;
    --navbar-bg-color-three: #424156;
}
.titlebar {
    background-color: #2A2838; 
    top: 0;
    left: 0;
    right: 0;
    height: 55px;
    width: 100%;

    display: flex;
    justify-content: space-between;
    color: #EAEAEA;
    -webkit-app-region: drag;   

    
}
#logo {
    margin-left: 49%;
    -webkit-app-region: drag;

    -moz-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}
.actions {
    display: flex;
    -webkit-app-region: no-drag;
}
#exitBTN {
    right: 0;
    height:20px;
    width: 20px;
    margin: 5px;
    -webkit-app-region: no-drag;
}
#exitBTN:hover {
    color: #FF1887;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}
#minimizeBTN {
    height:20px;
    width: 20px;
    margin: 5px;
    -webkit-app-region: no-drag;
}
#minimizeBTN:hover {
    color: #3581D8;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}
</style>