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
        class="button popup-text__close-button"
        aria-label="Close popup"
      >
        <IconArrow
          class="icon-arrow"
          :fillColor="'var(--color-primary)'"
          :strokeColor="'var(--color-secondary)'"
        />
      </button>
    </div>
  </section>
</template>
<script setup>
import IconArrow from "@/assets/icons/IconArrow.vue";

defineProps({
  currentTarget: String,
  popTextActive: Boolean,
});

const emit = defineEmits(["close"]);

function closePopText() {
  emit("close");
}
</script>
<style lang="scss">
@use "@/assets/styles/components/popup-text.scss";
</style>
