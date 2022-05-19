<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'
import { useDependency } from 'vdi'
import { TestService } from './core/service/Test.Service'

const TopTestService = useDependency(TestService)
</script>

<template>
    <header>
        <div class="about">
            <img
                alt="Vue logo"
                class="logo"
                src="@/assets/logo.svg"
                width="100"
                height="100"
            />

            <h2>Vdi</h2>
        </div>

        <div class="top">
            TopTestService: {{ TopTestService.count }}
            <button @click="TopTestService.inc">inc</button>
        </div>

        <nav>
            <RouterLink to="/">在子模块重新注入</RouterLink>
            <RouterLink to="/test/father">在子模块不重新注入</RouterLink>
            <RouterLink to="/test/self">在子页面上重新注入</RouterLink>
        </nav>
    </header>

    <RouterView />
</template>

<style scoped>
#app {
    font-weight: normal;
}
.about {
    margin-top: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
}
.top {
    font-size: 20px;
}
a {
    text-decoration: none;
    transition: 0.4s;
    color: #000;
}
/* a,
.green {
    text-decoration: none;
    color: hsla(160, 100%, 37%, 1);
    transition: 0.4s;
} */
@media (hover: hover) {
    a:hover {
        background-color: hsla(160, 100%, 37%, 0.2);
    }
}
nav {
    width: 100%;
    font-size: 18px;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 10rem;
    border-bottom: 1px solid #eee;
}
nav a.router-link-exact-active {
    color: hsla(160, 100%, 37%, 1);
}
nav a.router-link-exact-active:hover {
    background-color: transparent;
}
nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}
nav a:first-of-type {
    border: 0;
}
</style>
