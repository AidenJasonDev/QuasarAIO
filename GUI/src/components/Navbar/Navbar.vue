<script>
import NavbarLink from './NavbarLink'
export default {
    props:{},
    components: { NavbarLink },
    setup() {

    },
    currentTime() {
       return new Date().getTime();

    }
}
</script>

<template> 
    <div class="navbar">
        <div class="clock" >
            <p id="time" script="currentTime()"></p>
        </div>
        <Navbarlink to="/analytics" icon="fas fa-chart-pie"></NavbarLink>
        <NavbarLink to="/" icon="fas fa-th-large"></NavbarLink>
        <NavbarLink to="/profiles" icon="fas fa-user"></NavbarLink>
        <NavbarLink to="/proxies" icon="fas fa-cloud"></NavbarLink>
        <NavbarLink to="/inventory" icon="fas fa-briefcase"></NavbarLink>
        <NavbarLink to="/captcha" icon="fas fa-robot"></NavbarLink>
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
</style>

<style scoped>
    .navbar {
        color: var(--nabvar-item-color);
        background-color: var(--navbar-bg-color-one);

        float: bottom;
        position: absolute;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
        height: 72px;
        width: 100%;
        max-height: 72px;
        max-width: 100%;
        align-items: center;
        justify-content: center;

        display: flex;
        flex-direction: row;
    }
</style>