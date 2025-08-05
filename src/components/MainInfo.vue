<script setup>
import {useGetCurrentExperience} from '@/composables/useWorkExperience.js'

const skills = ["Vue 2/3", "Vuex/Pinia", "Tailwind", "CSS и SCSS", "JS", "REST API"]
const currentExperience = useGetCurrentExperience('01.01.2022')
</script>

<template>
    <div class="flex flex-col gap-2.5">
        <NImage
            class="w-full aspect-square !max-h-80 rounded-3xl"
            width="100%"
            object-fit="cover"
            src="https://img.hhcdn.ru/photo/773468102.jpeg?t=1754385141&h=N1bZX_-A4nwetR0EQ_PcVw"
        />

        <div class="mb-3">
            <h1 class="text-2xl font-semibold">
                Каширин Владислав
            </h1>
            <div class="-mt-1.5 font-medium">Фронтенд-разработчик</div>
        </div>

        <div class="grid grid-cols-[85px_1fr] gap-x-9 gap-y-1.5 items-baseline">
            <span class="text-xs font-medium">Стаж:</span>
            <span>{{ currentExperience }}</span>

            <!--Навыки-->
            <span class="text-xs font-medium">Навыки:</span>
            <div>
                <div class="flex gap-1 flex-wrap">
                    <n-tag
                        v-for="skill in skills"
                        :key="skill"
                        class="!bg-transparent"
                        :round="false"
                        :strong="true"
                    >
                        {{ skill }}
                    </n-tag>
                </div>
            </div>

            <!--Образование -->
            <span class="text-xs font-medium">Образование:</span>
            <span>
                Сибирский Государственный Университет Телекоммуникаций и Информатики (СибГУТИ)
            </span>
        </div>

        <!--        <div>-->
        <!--            <NButtonGroup class="w-full" vertical>-->
        <!--                <NButton class="!bg-white">Обо мне</NButton>-->
        <!--                <div class="bg-stripes h-3 w-full border-x border-gray-300 text-gray-300"></div>-->
        <!--                <NButton class="bg-white">Примеры работ</NButton>-->
        <!--                <div class="bg-stripes h-3 w-full border-x border-gray-300 text-gray-300"></div>-->
        <!--                <NButton class="bg-white">Связаться со мной</NButton>-->
        <!--            </NButtonGroup>-->
        <!--        </div>-->
    </div>
</template>