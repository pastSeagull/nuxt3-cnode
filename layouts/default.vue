<script setup lang="ts">
const navbarList = {
    home: { title: "首页" },
    getstart: { title: "新手入门" },
    api: { title: "api" },
    about: { title: "关于" },
    signup: { title: "注册" },
    signin: { title: "登录" }
}

</script>

<template>
    <div>
        <div class="header">
            <header class="header-box h-14 flex items-center justify-between">
                <NuxtLink to="/" exact class="flex">
                    <img class="w-28 mr-5" src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo">
                    <input type="text" class="rounded-2xl outline-none w-56" />
                </NuxtLink>
                <div class="text-white">
                    <NuxtLink class="hover:text-white mr-9 text-gray-300 cursor-pointer" v-for="(list, key) in navbarList" :key="key">
                        {{ list.title }}
                    </NuxtLink>
                </div>

            </header>
        </div>
        <slot role="main" />
    </div>
</template>
<style>
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 15px;
    background: #e1e1e1;
    margin: 0;
    padding: 0;
    overflow-y: scroll;
}

.header {
    background-color: #444444;
}

.header-box {
    width: 90%;
    margin: 0 auto;
}
</style>
