<template>
  <DefaultLayout v-slot="{ openPopup }">
    <HomePage :openPopup="openPopup" />
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import "@/assets/styles/global.scss";
</script>

<style scoped></style>
