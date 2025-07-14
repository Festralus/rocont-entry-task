<template>
  <popText
    v-show="isPopTextOpen"
    :currentTarget="currentTarget"
    :isPopTextOpen="isPopTextOpen"
    @close="closePopup()"
  />

  <div class="layout">
    <div class="layout__background-shapes" aria-hidden="true"></div>

    <main class="layout__content">
      <slot :openPopup="openPopup" />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import popText from "@/components/PopupText.vue";

const isPopTextOpen = ref(false);
const currentTarget = ref("");

function openPopup(newTarget) {
  document?.body.classList.add("block-scrolling");
  currentTarget.value = newTarget;
  isPopTextOpen.value = true;
}

function closePopup() {
  document?.body.classList.remove("block-scrolling");
  currentTarget.value = null;
  isPopTextOpen.value = false;
}
</script>

<style lang="scss">
@use "@/assets/styles/_default-layout.scss";
</style>
