<script setup>
import MainWrapper from "@/components/MainWrapper.vue";

const themeOverrides = {
    common: {
        fontFamily: '"Manrope", sans-serif',
        textColorBase: '#FF0000',
    },
};
</script>

<template>
    <NConfigProvider :theme-overrides="themeOverrides">
        <NGlobalStyle />
        <MainWrapper />
    </NConfigProvider>
</template>