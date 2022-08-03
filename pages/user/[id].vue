<script setup lang="ts">

const route = useRoute()
const id = route.params.id

console.log("11111111")

</script>

<template>
    <div>
        <div>{{ id }} user pages</div>
        <NuxtLink to="/">index</NuxtLink>
    </div>
</template>
