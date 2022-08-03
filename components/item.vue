<script setup lang="ts">

/* const props = defineProps({
    tab: {
        type: String,
        default: "all"
    }
})
console.log(props) */
const tab = {
    all: { title: "全部" },
    good: { title: "精华" },
    share: { title: "分享" },
    ask: { title: "问答" },
    job: { title: "问答" },
    dev: { title: "客户端测试" }
}


</script>

<template>
    <div>
        <div class="bg-gray-300">
            <NuxtLink class="mr-9" v-for="(list, key) in tab" :key="key">
                {{ list.title }}
            </NuxtLink>
        </div>

    </div>
</template>
