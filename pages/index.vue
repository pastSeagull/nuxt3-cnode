<script setup lang="ts">
const router = useRouter()

const goAbout = () => {
    router.push(`/about/`)
}
const route = useRoute()

const tab = route.query.tab


</script>


<template>
    <div class="flex">
        <Item class="p-5 flex-2" />
        <Sidebar class="flex-1" />
        <!-- <NuxtLink to="/about">
            About page
        </NuxtLink>
        <br />
        <NuxtLink to="/user/1">go user</NuxtLink>
        <br />
        <button @click="goAbout">goAbout</button> -->
    </div>
</template>
