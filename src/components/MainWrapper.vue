<script setup>
import MainInfo from "@/components/MainInfo.vue";
import MyProjects from "@/components/MyProjects.vue";
import MyContacts from "@/components/MyContacts.vue";
</script>

<template>
    <NCard class="m-2 !rounded-xl !w-[unset] max-w-md mx-auto" size="small">
        <NTabs type="segment" animated>
            <NTabPane
                name="MainInfo"
                tab="Главная"
            >
                <MainInfo />
            </NTabPane>
            <NTabPane
                name="MyProjects"
                tab="Проекты"
            >
                <MyProjects />
            </NTabPane>
            <NTabPane
                name="Contacts"
                tab="Контакты"
            >
                <MyContacts />
            </NTabPane>
        </NTabs>
    </NCard>
</template>

<style scoped></style>