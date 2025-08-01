<template>
  <section
    class="gallery"
    :class="{ 'gallery-margin': showArrows }"
    role="region"
    aria-label="Галерея изображений"
  >
    <h2 class="gallery__title">Это — не совсем то, что вы думаете</h2>

    <div v-show="showArrows && !isMobile" class="gallery__controls">
      <IconArrow
        class="gallery__arrow"
        aria-label="Прокрутить влево"
        tabindex="0"
        @click="scrollLeft"
        @keyup.enter="scrollLeft"
        @mouseenter="leftArrow.onMouseEnter"
        @mouseleave="leftArrow.onMouseLeave"
        @mousedown="leftArrow.onMouseDown"
        @mouseup="leftArrow.onMouseUp"
        :fillColor="
          leftArrow.isActive
            ? 'var(--color-primary-active)'
            : leftArrow.isHovered
            ? 'var(--color-primary)'
            : 'var(--color-light)'
        "
        :strokeColor="
          leftArrow.isActive || leftArrow.isHovered
            ? 'var(--color-secondary)'
            : 'var(--color-primary)'
        "
      />
      <IconArrow
        class="gallery__arrow"
        aria-label="Прокрутить впарво"
        tabindex="0"
        @click="scrollRight"
        @keyup.enter="scrollRight"
        @mouseenter="rightArrow.onMouseEnter"
        @mouseleave="rightArrow.onMouseLeave"
        @mousedown="rightArrow.onMouseDown"
        @mouseup="rightArrow.onMouseUp"
        :fillColor="
          rightArrow.isActive
            ? 'var(--color-primary-active)'
            : rightArrow.isHovered
            ? 'var(--color-primary)'
            : 'var(--color-light)'
        "
        :strokeColor="
          rightArrow.isActive || rightArrow.isHovered
            ? 'var(--color-secondary)'
            : 'var(--color-primary)'
        "
      />
    </div>

    <div class="gallery__row" ref="galleryRef">
      <div
        v-for="(card, index) in cards"
        :key="index"
        tabindex="0"
        @click="openPopup('Великолепный клик!')"
        @keyup.enter="openPopup('Великолепный клик!')"
        class="gallery__item"
        :class="{ 'is-hovered': isMobile }"
      >
        <img
          :src="card.image"
          :alt="card.alt || 'Изображение без описания'"
          loading="lazy"
          class="gallery__item-img"
        />
        <div class="gallery__item-overlay">
          <h4 class="gallery__item-title">{{ card.title }}</h4>
          <p class="gallery__item-text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Vue imports
import { ref, computed, onMounted, onUnmounted } from "vue";

// Composable imports
import { useHoverActive } from "@/composables/useHoverActive";

// Icon imports
import IconArrow from "@/assets/icons/IconArrow.vue";

// Misc
onMounted(() => {
  window.addEventListener("resize", debouncedResize);
  checkIfScrollable();
});
onUnmounted(() => window.removeEventListener("resize", debouncedResize));

// Props
const props = defineProps({
  cards: Array,
  openPopup: Function,
});

// Layout variables
const leftArrow = ref(useHoverActive());
const rightArrow = ref(useHoverActive());

// Track resizes for image overlays
const galleryRef = ref(null);
const width = ref(window.innerWidth);

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

function updateWidth() {
  // Image overlays
  width.value = window.innerWidth;
  // Arrows
  checkIfScrollable();
}
const debouncedResize = debounce(updateWidth, 250);

const isMobile = computed(() => width.value < 960);

// Track resizes for arrows
const showArrows = ref(false);

function checkIfScrollable() {
  if (!galleryRef.value) return;
  const el = galleryRef.value;
  if (el) {
    showArrows.value = el.scrollWidth > el.clientWidth;
  }
}

// Scroll via arrows
const scrollByAmount = 300;
const scrollLeft = () => {
  galleryRef.value?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
};
const scrollRight = () => {
  galleryRef.value?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
};
</script>

<style lang="scss">
@use "@/assets/styles/components/_gallery-slider.scss";
</style>
