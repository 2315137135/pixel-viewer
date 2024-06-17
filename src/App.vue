<template>
    <div class="flex w-full justify-between">
        <div class="w-full bg-gray-200   flex flex-wrap p-12 gap-4 min-h-screen  shadow-inner content-start ">
            <button v-for="item in fileList" class="size-32 shadow-md " @click="preview(getUrl(item))">
                <img :src="getUrl(item)" alt="" class="size-32 object-contain" style="image-rendering: pixelated"/>
            </button>
        </div>

        <n-modal v-model:show="showPreview" preset="card" style="width: 60vw; ">
            <img :src="previewUrl" alt="" class="w-full" style="image-rendering: pixelated">
        </n-modal>

        <div class="w-1/3 h-screen flex flex-col ">
            <h1 class="text-4xl font-bold my-8  drop-shadow  text-center">这是标题</h1>
            <n-upload v-model:file-list="fileList" :show-file-list="false" class="flex-1" multiple
                      trigger-style="height: 100%">
                <n-upload-dragger class="h-full ">

                    <div class="items-center flex flex-col justify-center  h-full ">
                        <Icon icon="system-uicons:archive" width="32" height="32" />
                        <n-text style="font-size: 16px">
                            点击或者拖动图片到该区域
                        </n-text>
                    </div>
                </n-upload-dragger>
            </n-upload>
        </div>
    </div>

</template>

<script lang="ts" setup>
import {NImage, NModal, NText, NUpload, NUploadDragger, UploadFileInfo, NIcon} from "naive-ui";
import {Icon} from "@iconify/vue";
import {ref} from "vue";

let fileList = ref<UploadFileInfo[]>([])
let urlMap = new Map<string, string>()

let showPreview = ref(false)
let previewUrl = ref("")

function getUrl(file: UploadFileInfo) {
    if (!urlMap.has(file.id)) {
        urlMap.set(file.id, URL.createObjectURL(file.file as File))
    }
    return urlMap.get(file.id) as string
}

function preview(url: string) {
    previewUrl.value = url
    showPreview.value = true
}

</script>
