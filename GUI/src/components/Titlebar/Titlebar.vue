<script >

import Clock from "./Clock.vue"
//import { close, minimize } from "./appFunctions.js"
import { inactive, toggleNotifCenter, notifCenterWidth } from "./NotifCenter/state.js"
import { inactiveSettings, toggleSettings, settingsWidth } from "./Settings/state.js"
import Settings from "./Settings/Settings.vue"
import NotifCenter from "./NotifCenter/NotifCenter.vue"
export default {
    name: "Titlebar",
    components: { Clock, NotifCenter, Settings },
    setup() { 
        return { inactive, toggleNotifCenter, notifCenterWidth, inactiveSettings, toggleSettings, settingsWidth }
    },
}

</script>

<template>
    <div class="titlebar">
        <div id="logo">
            <img src="./quasar-aio.png" alt="" style="width:54px;height:47px">
        </div>

        <div class="things">
            <div class="otherInfo">
            <p id="time"> <Clock /> </p>
            <p id="version">V0.0.1(alpha)</p>
        </div>
        <div class="subNav" >
            <div id="notificationCenter" @click="toggleNotifCenter">
                    <span v-if="inactive">
                        <i class="fas fa-bell" style="color:#6A6FED"></i>
                    </span>
                    <span v-else>
                        <i class="fas fa-bell" style="color:#424156"></i>
                    </span>
            </div>
            
            <div id="settings" @click="toggleSettings" >
                
                    <span v-if="inactiveSettings">
                        <i class="fas fa-cog" style="color:#6A6FED"></i>
                    </span>
                    <span v-else>
                        <i class="fas fa-cog" style="color:#424156"></i>
                    </span>
                    
            </div>
        </div>

        <div class="actions">
            <div id="minimizeBTN" @click="minimize">
                <i class="fas fa-minus"></i>
            </div>
            <div id="exitBTN" @click="close">
                <i class="fas fa-power-off"></i>
            </div>
        </div>

        </div>
        <div class="notifCenter" :style="{ width: notifCenterWidth }">

            <span v-if="inactive">
                <NotifCenter />
            </span>
            <span v-else>
                
            </span>
        </div>
        <div class="settings" :style="{ width: settingsWidth }">

            <span v-if="inactiveSettings" >
                <Settings />
            </span>
            <span v-else>
                
            </span>
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

.settings {

    float: right;
    position: fixed;

    top: 35px;
    right: 0;
    padding: 5px;
    max-height: 150px;
    height: 150px;

    transition: 0.2s ease-in-out;

    display: flex;
    flex-direction: column;
     user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;

}
.notifCenter {

    color: #EAEAEA;
    background-color: #2A2838;
    float: right;
    position: fixed;

    top: 55px;
    right: 0;
    bottom: 72px;
    padding: 5px;

    transition: 0.2s ease-in-out;

    display: flex;
    flex-direction: column;
     user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;

}
.things {
    display: flex;
}
.otherInfo {
    display: flex;
    font-size: 12px;
}
#time {
    margin: 5px;
    font-weight: 600;
}
#version {
    margin: 5px;
    font-weight: 600;
}
.subNav {
    display: flex;
    -webkit-app-region: no-drag;
}
#notificationCenter {
    margin: 5px;
    color: #4E4C71;
    
}
#notificationCenter:hover {
    color: #7D7AAE;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}
#notificationCenter:active {
    color: #6A6FED;
}
#settings {
    margin: 5px;
}
#settings:hover {
    color: #7D7AAE;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}
#settings:active {
    color: #6A6FED;
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

    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
}
#logo {
    margin-left: 50%;
    transform: translate(-50%);
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
    color: #FF605C;
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
    color: #63CAD8;
    transition: 0.2s ease-in-out;
    cursor: pointer;
}
</style>