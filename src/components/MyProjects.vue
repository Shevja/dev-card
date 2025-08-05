<script setup>
const projectsInfoList = [
    {
        id: 0,
        title: 'test',
        description: 'Lorem ipsum dolor sit amet, consetetur',
        imageSrc: 'delegator.jpg',
        stack: ['Vue 2', 'JS', 'Tailwind'],
    }
]
</script>

<template>
    <NCarousel class="!h-96">
        <div v-for="project in projectsInfoList" :key="project.id" class="relative h-full flex -mb-3">
            <div class="absolute top-0 left-0 w-full h-full -z-1">
                <NImage
                    :src="'images/myProjects/' + project.imageSrc"
                    class="!w-full h-full"
                    alt="delegator"
                    width="100%"
                    object-fit="cover"
                />
            </div>

            <div class="flex flex-col gap-3 w-full m-2 mt-auto">
                <div>
                    <div class="text-lg font-semibold">{{ project.title }}</div>
                    <div class="font-medium -mt-0.5">{{ project.description }}</div>
                </div>

                <div class="flex gap-1 flex-wrap">
                    <NTag
                        v-for="tech in project.stack"
                        :key="tech" type="info"
                        :bordered="false"
                        round
                    >
                        {{ tech }}
                    </NTag>
                </div>
            </div>
        </div>
    </NCarousel>
</template>