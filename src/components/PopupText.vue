<template>
  <section v-if="popTextActive" class="popup-text">
    <!-- Overlay -->
    <div
      class="popup-text__overlay"
      @click="closePopText"
      aria-hidden="true"
    ></div>

    <!-- Modal Dialog -->
    <div class="popup-text__card">
      <h2 class="popup-text__text">
        <span class="">{{ currentTarget }}</span>
      </h2>
      <button
        @click="closePopText"
        @mouseenter="popupArrow.onMouseEnter"
        @mouseleave="popupArrow.onMouseLeave"
        @mousedown="popupArrow.onMouseDown"
        @mouseup="popupArrow.onMouseUp"
        class="button popup-text__close-button"
        aria-label="Close popup"
      >
        <IconArrow
          class="icon-arrow"
          :fillColor="
            popupArrow.isActive
              ? 'var(--color-primary-active)'
              : popupArrow.isHovered
              ? 'var(--color-primary-hovered)'
              : 'var(--color-primary)'
          "
          :strokeColor="'var(--color-secondary)'"
          :width="isScreenLG ? 90 : 66"
        />
      </button>
    </div>
  </section>
</template>
<script setup>
import { ref, computed } from "vue";

import { useHoverActive } from "@/composables/useHoverActive";

import IconArrow from "@/assets/icons/IconArrow.vue";

defineProps({
  currentTarget: String,
  popTextActive: Boolean,
});

const popupArrow = ref(useHoverActive());

const isScreenLG = computed(() => window.innerWidth >= 960);

const emit = defineEmits(["close"]);

function closePopText() {
  emit("close");
}
</script>
<style lang="scss">
@use "@/assets/styles/components/popup-text.scss";
</style>
