<template>
  <section v-show="isPopTextOpen" class="popup-text">
    <!-- Overlay -->
    <div
      class="popup-text__overlay"
      @click="closePopText"
      aria-hidden="true"
    ></div>

    <!-- Modal Dialog -->
    <div
      class="popup-text__card"
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <h2 class="popup-text__text">
        <span>{{ currentTarget }}</span>
      </h2>
      <button
        ref="arrowRef"
        tabindex="0"
        @click="closePopText"
        @keyup.enter="closePopText"
        @mouseenter="popupArrow.onMouseEnter"
        @mouseleave="popupArrow.onMouseLeave"
        @mousedown="popupArrow.onMouseDown"
        @mouseup="popupArrow.onMouseUp"
        class="button popup-text__close-button"
        aria-label="Закрыть меню"
        role="button"
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
          :width="isScreenLG ? 5.625 : 4.125"
        />
      </button>
    </div>
  </section>
</template>
<script setup>
// Vue imports
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  watchEffect,
  nextTick,
} from "vue";

// Composable imports
import { useHoverActive } from "@/composables/useHoverActive";

// Icon imports
import IconArrow from "@/assets/icons/IconArrow.vue";

// Props
const props = defineProps({
  currentTarget: String,
  isPopTextOpen: Boolean,
});

// Layout variables
const popupArrow = ref(useHoverActive());
const arrowRef = ref(null);

// Close popup window
const emit = defineEmits(["close"]);

function closePopText() {
  emit("close");
}

// Close popup-text on Escape
function handleKeydown(event) {
  if (event.key === "Escape") {
    closePopText();
  }
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  window.addEventListener("resize", debouncedResize);
});
onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
  window.removeEventListener("resize", debouncedResize);
});

// Auto-focus popup upon opening it
setTimeout(() => {
  watchEffect(() => {
    if (props.isPopTextOpen) {
      nextTick(() => {
        const element = arrowRef.value?.$element || arrowRef.value;
        element?.focus?.();
      });
    }
  });
}, 200);

// CSS helpers

const width = ref(window.innerWidth);
const isScreenLG = computed(() => width.value >= 960);

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function updateWidth() {
  width.value = window.innerWidth;
}

const debouncedResize = debounce(updateWidth, 250);
</script>
<style lang="scss">
@use "@/assets/styles/components/_popup-text.scss";
</style>
