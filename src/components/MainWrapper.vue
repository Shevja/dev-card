<script setup>

const skills = ["Vue 2/3", "Vuex/Pinia", "JS", "Tailwind", "CSS и SCSS", "REST API"]
</script>

<template>
    <NCard class="m-2 !rounded-lg !w-[unset]" size="small">
        <div class="flex flex-col gap-2.5">
            <n-image
                class="w-full h-56 rounded-lg"
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

            <div>
                <div class="text-xs font-medium mb-0.5">Навыки:</div>
                <div class="flex gap-1 flex-wrap mb-4">
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

            <div>
                <NButtonGroup class="w-full" vertical>
                    <NButton>Обо мне</NButton>
                    <div class="stripe-divider border-x border-slate-200"></div>
                    <NButton>Примеры работ</NButton>
                    <div class="stripe-divider border-x border-slate-200"></div>
                    <NButton>Связаться со мной</NButton>
                </NButtonGroup>
            </div>
        </div>
    </NCard>
</template>

<style scoped>
.stripe-divider {
    height: 10px;
    background-image: repeating-linear-gradient(
        -45deg,
        rgb(224, 224, 230),
        rgb(224, 224, 230) 1px,
        transparent 2px,
        transparent 6px
    );
}
</style>