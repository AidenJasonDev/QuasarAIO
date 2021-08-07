<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
export default {
    props: { 
        to: { type: String, required: true },
        icon: { type: String, required: true}
    },
    setup(props) {
        const route = useRoute()
        const isActive = computed(() => route.path === props.to)
        return { isActive }
    }
}
</script>

<template>
    <router-link :to="to" class="link" :class="{ active: isActive }">
        <i class="icon" :class="icon" />
    </router-link>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
    
    display: flex;
    align-items: center;

    cursor: pointer;
    position: relative;
    user-select: none;
    transition: 0.2s ease-in-out;

    margin: 2px;
    padding: 15px;
    border-radius: 4px;
    height: 18px;
    width: 18px;
    justify-content: center;

    color: var(--navbar-item-color)

}
.link:hover {
    color: #7D7AAE;
}
.link.active {
    background-color:#343346;
    color: #6A6FED;
}

</style>