<script setup lang="ts">
const router = useRouter()

const goAbout = () => {
    router.push(`/about/`)
}
const route = useRoute()

const tab = route.query.tab


</script>


<template>
    <div class="flex p-5 w-11/12 m-auto">
        <Item class="flex-1 mr-5" />
        <Sidebar class="w-72" />
        <!-- <NuxtLink to="/about">
            About page
        </NuxtLink>
        <br />
        <NuxtLink to="/user/1">go user</NuxtLink>
        <br />
        <button @click="goAbout">goAbout</button> -->
    </div>
</template>
