<template>
  <popText
    v-if="popTextActive"
    :currentTarget="currentTarget"
    :popTextActive="popTextActive"
    @close="closePopup()"
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
  document?.body.classList.add("block-scrolling");
  currentTarget.value = newTarget;
  popTextActive.value = true;
}

function closePopup(newTarget) {
  document?.body.classList.remove("block-scrolling");
  currentTarget.value = null;
  popTextActive.value = false;
}
</script>

<style lang="scss">
@use "@/assets/styles/default-layout.scss";
</style>
