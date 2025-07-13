<template>
  <section class="form">
    <div class="form__info">
      <h2 v-if="isSmallMobile" class="form__title">
        Если вы<br />тоже решили<br />«а почему бы и нет»
      </h2>
      <h2 v-else class="form__title">
        Если вы тоже решили<br />«а почему бы и нет»
      </h2>

      <ul class="form__benefits">
        <li class="form__benefit" v-for="(item, i) in benefits" :key="i">
          <span class="form__benefit-icon"><IconArrowSmall /></span>
          <span class="form__benefit-text lead">{{ item }}</span>
        </li>
      </ul>
    </div>

    <form class="form__fields" @submit.prevent="handleSubmit">
      <div class="form__text-inputs">
        <input
          v-for="input in inputs"
          :key="input.name"
          v-model="formData[input.name]"
          :type="input.type"
          :placeholder="input.placeholder"
          class="form__text-input"
          required
        />
      </div>

      <div @click="showCheckboxError = false" class="form__checkbox">
        <input
          v-model="formData.agreed"
          type="checkbox"
          id="checkbox"
          class="form__checkbox-input"
        />
        <label for="checkbox" class="form__checkbox-label note">
          <span class="form__checkbox-text">
            Согласен(-на) на обработку чего угодно — лишь бы форма работала
          </span>
        </label>
      </div>

      <p v-if="showCheckboxError" class="form__checkbox-error">
        Для отправки необходимо согласиться на обработку данных
      </p>

      <button
        class="button form__button"
        :class="{ 'form__button-error': showCheckboxError }"
        type="submit"
        @mouseenter="formButton.onMouseEnter"
        @mouseleave="formButton.onMouseLeave"
        @mousedown="formButton.onMouseDown"
        @mouseup="formButton.onMouseUp"
      >
        <span class="hero__button-text -cta">Отправить</span>
        <IconArrow
          class="hero__button-icon icon-arrow"
          :fillColor="
            formButton.isActive
              ? 'var(--color-primary-active)'
              : formButton.isHovered
              ? 'var(--color-primary-hovered)'
              : 'var(--color-primary)'
          "
          :strokeColor="
            formButton.isActive
              ? 'var(--color-secondary-active)'
              : formButton.isHovered
              ? 'var(--color-secondary-hovered)'
              : 'var(--color-secondary)'
          "
        />
      </button>
    </form>
  </section>
</template>

<script setup>
// Vue imports
import { ref, reactive, computed, onMounted, onUnmounted } from "vue";

// Composable imports
import { useHoverActive } from "@/composables/useHoverActive";

// Icon imports
import IconArrow from "@/assets/icons/IconArrow.vue";
import IconArrowSmall from "@/assets/icons/IconArrowSmall.vue";

// Misc
onMounted(() => window.addEventListener("resize", debouncedResize));
onUnmounted(() => window.removeEventListener("resize", debouncedResize));

// Props
const props = defineProps({
  openPopup: Function,
  inputs: {
    type: Array,
    default: () => [
      { name: "name", type: "text", placeholder: "Имя" },
      { name: "phone", type: "tel", placeholder: "Телефон" },
    ],
  },
  benefits: {
    type: Array,
    default: () => [
      "Можно заказать много",
      "Доступ возможен через северный интерфейс",
      "Можно просто поболтать",
    ],
  },
});

// Track resizes for a layout fix
const width = ref(window.innerWidth);
const isSmallMobile = computed(() => width.value < 360);
const formButton = ref(useHoverActive());

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
const debouncedResize = debounce(() => {
  width.value = window.innerWidth;
}, 250);

// Track formData for form validation
const formData = reactive({ agreed: false });
props.inputs.forEach((input) => {
  formData[input.name] = "";
});

const showCheckboxError = ref(false);

function handleSubmit(event) {
  const form = event.target.closest("form");

  const isValidForm = form.checkValidity();

  showCheckboxError.value = !formData.agreed;

  if (isValidForm && formData.agreed) {
    props.openPopup("Вы отправили!");
    form.reset();
    props.inputs.forEach((input) => {
      formData[input.name] = "";
    });
    formData.agreed = false;
    showCheckboxError.value = false;
  } else {
    form.reportValidity();
  }
}
</script>

<style lang="scss">
@use "@/assets/styles/components/form-component.scss";
</style>
