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
// Vue imports
import { ref, computed } from "vue";

// Composable imports
import { useHoverActive } from "@/composables/useHoverActive";

// Icon imports
import IconArrow from "@/assets/icons/IconArrow.vue";

// Props
defineProps({
  currentTarget: String,
  popTextActive: Boolean,
});

// Layout variables
const popupArrow = ref(useHoverActive());

// Track resizes to change button width
const isScreenLG = computed(() => window.innerWidth >= 960);

// Close popup window
const emit = defineEmits(["close"]);

function closePopText() {
  emit("close");
}
</script>
<style lang="scss">
@use "@/assets/styles/components/popup-text.scss";
</style>
