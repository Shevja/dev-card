<script setup>
import MainWrapper from "@/components/MainWrapper.vue";

const themeOverrides = {
    common: {
        fontFamily: '"Manrope", sans-serif',
    }
};
</script>

<template>
    <NConfigProvider :theme-overrides="themeOverrides">
        <NGlobalStyle />
        <MainWrapper />
    </NConfigProvider>
</template>