<template>
  <popText
    v-if="popTextActive"
    :currentTarget="currentTarget"
    :popTextActive="popTextActive"
    @close="popTextActive = false"
  />

  <div class="layout">
    <div class="layout__background_shapes" aria-hidden="true"></div>

    <main class="layout__content">
      <slot :openPopup="openPopup" />
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import popText from "@/components/PopupText.vue";

const popTextActive = ref(false);
const currentTarget = ref("");

function openPopup(newTarget) {
  currentTarget.value = newTarget;
  popTextActive.value = true;
}
</script>

<style lang="scss">
@use "@/assets/styles/default-layout.scss";
</style>
