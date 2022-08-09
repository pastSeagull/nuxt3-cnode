<script setup lang="ts">
import { fetchTest, IData } from "../server/api";
import { capitalize } from "../composables/utils"

const tab = reactive({
    all: { title: "全部", isSelect: true },
    good: { title: "精华", isSelect: false },
    share: { title: "分享", isSelect: false },
    ask: { title: "问答", isSelect: false },
    job: { title: "问答", isSelect: false },
    dev: { title: "客户端测试", isSelect: false }
})

const loading = ref(false)

const dataList = reactive({
    data: {}
})

const changeTab = async (key) => {
    tab[key].isSelect = true
    Object.keys(tab).map(el => {
        if (el !== key) {
            tab[el].isSelect = false
        }
    })
    getItem(key)
}
const getItem = async (key) => {
    try {
        dataList.data = {}
        loading.value = true
        const list = await fetchTest(key)
        dataList.data = list.data
        loading.value = false
    } catch (err) {

    }
}
getItem("")



</script>

<template>
    <div>
        <div class="bg-gray-300  p-3">
            <NuxtLink @click="changeTab(key)"
                :class="[list.isSelect ? 'mr-3 ml-3 p-1 rounded text-sm text-white bg-green-600 text-white cursor-pointer' : 'mr-3 ml-3 p-1 rounded cursor-pointer text-sm']"
                v-for="(list, key) in tab" :key="key">
                {{ list.title }}
            </NuxtLink>
        </div>
        <Loading v-if="loading" />
        <div v-for="item in dataList.data" :key="item.id" class="hover:bg-gray-100 bg-white">
            <div class="flex items-center justify-between border-t-2 p-2">
                <div class="">
                    <img class="w-8 inline-block mr-3" :src="item.author.avatar_url" alt="">
                    <span class="inline-block w-20 text-xs">{{ item.reply_count }} / {{ item.visit_count }}</span>
                    <span class="mr-1 bg-green-600 rounded p-0.5 text-white text-xs">置顶</span>
                    <span class="whitespace-nowrap">{{ item.title }}</span>
                </div>
                <div>
                    <img class="w-5 inline-block" src="https://avatars.githubusercontent.com/u/1763067?v=4&s=120"
                        alt="">
                    <span class="inline-block w-10 text-xs text-right">{{ capitalize(item.last_reply_at) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
