<script>
import { sendWebhook } from './webhookTest.js'
export default {
    name: "Settings",
    components: {  },
    setup() {
        return { sendWebhook }
    }

}
</script>

<template>
    <div class="settings">
        <div class="changeSettings">
            <p id="title"> Settings </p>
            <div class="webhook">
                <input id="webhookBox" type="text" placeholder="Discord Webhook URL">    
                <div class="sendWebhook" @click="sendWebhook">
                    <i class="fas fa-paper-plane"></i>
                </div>
            </div>
            <div class="checkUpdates">
                <p id="checkUpdatesDesc">Check For Updates</p>
                <div class="checkForUpdates">
                    <i class="fas fa-sync-alt"></i>
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped>
.checkForUpdates {
    background-color: #63CAD8;
    color: #EAEAEA;
    width: 48px;
    height: 24px;
    border-radius: 4px;
    padding: 5px;
    margin-left: 97px;
    margin-top: 15px;
}
.checkForUpdates:hover {
    cursor: pointer;
    background-color: #6DDCEB;
    transition: 0.3s ease-in-out;
}
.sendWebhook {
    background-color: #6A6FED;
    color: #EAEAEA;
    width: 48px;
    height: 24px;
    border-radius: 4px;
    padding: 5px;
    margin-left: 8px;
}
.sendWebhook:hover {
    cursor: pointer;
    background-color: #7277FF;
    transition: 0.3s ease-in-out;
}
.changeSettings {
    width: 300px;
    height: 150px;
    background-color: #343346;
    border: 2px solid #575672;
    border-radius:4px;
    margin-left: 18px;
    margin-right: 18px;
}
.checkUpdates {
    display: flex;
    float: left;
    left: 0;
    bottom: 0;
}
#checkUpdatesDesc {
    margin-top: 25px;
    margin-left: 15px;

    font-size: 14px;
    font-weight: 600;
}
#title {
    font-weight: 600;
    font-size: 18px;
    float: left;
    margin-left: 10px;
    margin-top: 5px;
    top: 0;
    left: 0;
}
#webhookBox {
    width: 192px;
    border: 2px solid #424156;
    border-radius: 4px;
    outline: none;
    padding: 8px;
    margin-left: 10px;
    background-color: #2A2838;
    color: #666582;
    transition: 0.2s;

}
#webhookBox:focus {
    border-color: #6A6FED;
    box-shadow: 0 0 3px 0#6A6FED;
    color: #EAEAEA;
}
.webhook {
    display: flex;
    float: left;
    left: 0;
    top: 0;
}
</style>