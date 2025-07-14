<template>
  <div
    class="header__burger-overlay"
    @click="closeBurgerMenu"
    :class="{ active: isBurgerOpen }"
    role="button"
    tabindex="0"
    aria-label="Закрыть меню"
  ></div>

  <header class="header">
    <IconCompanyLogo class="header__logo" aria-label="Логотип компании" />
    <nav class="header__nav" aria-label="Главное меню">
      <a @click="openPopup(inDevelopment)" class="header__nav-element" href="#"
        >О системе</a
      >
      <a @click="openPopup(inDevelopment)" class="header__nav-element" href="#"
        >Архитектура</a
      >
      <a @click="openPopup(inDevelopment)" class="header__nav-element" href="#"
        >Мнения</a
      >
      <a
        @click="openPopup(inDevelopment)"
        class="header__nav-element -cta"
        href="#"
        >Попробовать</a
      >
      <a @click="openPopup(inDevelopment)" class="header__nav-element" href="#"
        >Для своих</a
      >
    </nav>
    <button class="header__burger" @click="openBurgerMenu">
      <IconBurgerMenu />
    </button>

    <nav
      class="header__burger-menu"
      :class="{
        active: isBurgerOpen,
        closed: !isBurgerOpen,
        'no-animation': !isBurgerAnimationActive,
      }"
      aria-label="Бургер-меню"
    >
      <button
        class="header__burger-arrow"
        aria-label="Закрыть меню"
        @click="closeBurgerMenu"
        @mouseenter="burgerArrow.onMouseEnter"
        @mouseleave="burgerArrow.onMouseLeave"
        @mousedown="burgerArrow.onMouseDown"
        @mouseup="burgerArrow.onMouseUp"
      >
        <IconArrow
          :fillColor="
            burgerArrow.isActive
              ? 'var(--color-primary-active)'
              : burgerArrow.isHovered
              ? 'var(--color-primary-hovered)'
              : 'var(--color-primary)'
          "
          :strokeColor="
            burgerArrow.isActive
              ? 'var(--color-secondary-active)'
              : burgerArrow.isHovered
              ? 'var(--color-secondary-hovered)'
              : 'var(--color-secondary)'
          "
        />
      </button>

      <a
        href="#"
        @click="openPopup(inDevelopment)"
        role="button"
        class="header__burger-link"
        >О системе</a
      >
      <a
        href="#"
        @click="openPopup(inDevelopment)"
        role="button"
        class="header__burger-link"
        >Архитектура</a
      >
      <a
        href="#"
        @click="openPopup(inDevelopment)"
        role="button"
        class="header__burger-link"
        >Мнения</a
      >
      <a
        href="#"
        @click="openPopup(inDevelopment)"
        role="button"
        class="header__burger-link -cta"
        >Попробовать</a
      >
      <a
        href="#"
        @click="openPopup(inDevelopment)"
        role="button"
        class="header__burger-link"
        >Для своих</a
      >
    </nav>
  </header>

  <section class="hero">
    <div class="hero__video-wrapper">
      <video
        class="hero__video"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        poster="/assets/hero-fallback-image.webp"
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
        К сожалению, воспроизведение видео в Вашем браузере не поддерживается.
      </video>
    </div>

    <h1 v-show="isScreenXS" class="hero__title">
      Просто потому <br />
      что можем <br />
      с Collagen
    </h1>
    <h1 v-show="!isScreenXS" class="hero__title">Просто потому что можем</h1>

    <p v-show="isScreenMD" class="hero__desc lead">
      Мы запустили основной цикл в 06:42. Результаты наблюдаются, но не
      зафиксированы. Рекомендуем сохранять спокойствие до следующего сигнала.
    </p>
    <p v-show="!isScreenMD" class="hero__desc lead">
      Мы запустили основной цикл в 06:42.<br />Результаты наблюдаются, но не
      зафиксированы.<br />Рекомендуем сохранять спокойствие до следующего
      сигнала.
    </p>

    <button
      @click="openPopup('Вы попробовали!')"
      @mouseenter="heroButton.onMouseEnter"
      @mouseleave="heroButton.onMouseLeave"
      @mousedown="heroButton.onMouseDown"
      @mouseup="heroButton.onMouseUp"
      class="button hero__button"
    >
      <span class="hero__button-text">Попробовать просто так</span>
      <IconArrow
        class="hero__button-icon icon-arrow"
        :fillColor="
          heroButton.isActive
            ? 'var(--color-secondary-active)'
            : 'var(--color-secondary)'
        "
        :strokeColor="
          heroButton.isHovered
            ? 'var(--color-primary-hovered)'
            : 'var(--color-primary)'
        "
      />
    </button>

    <p v-if="isScreenMD" class="hero__note note">
      Сертификат есть. Но это не точно. СГР №AM.01.01<br />.01.003.R.00 o47
      4.06.24
    </p>
    <p v-else-if="isScreenLG" class="hero__note note">
      Сертификат есть. Но это не точно.<br />СГР №AM.01.01 .01.003.R.00 o47
      4.06.24
    </p>
    <p v-else class="hero__note note">
      Сертификат есть. Но это не точно. СГР №AM.01.01 .01.003.R.00 o47 4.06.24
    </p>
  </section>

  <GallerySlider :cards="cards" :openPopup="openPopup" />

  <FormComponent :inputs="inputs" :benefits="benefits" :openPopup="openPopup" />

  <div class="contact-map-wrapper">
    <section class="contact">
      <h2 class="contact__title">Контакты</h2>

      <ul class="contact__list lead" aria-label="Контактная информация">
        <li class="contact__item">
          <span class="contact__icon"><IconContactsAddress /></span>
          <span class="contact__text"
            >Офис, где делают странные, но симпатичные вещи</span
          >
        </li>
        <li class="contact__item">
          <span class="contact__icon"><IconContactsClock /></span>
          <span class="contact__text">Пн–Пт с 10:00 до 20:00</span>
        </li>
        <li class="contact__item contact__item--numbers">
          <button
            class="contact__item contact__item--clickable"
            @click="
              handleContactClick(firstNumber), openPopup('Номер скопирован')
            "
          >
            <span class="contact__icon"><IconContactsPhone /></span>
            <span class="contact__text">{{ firstNumber }}</span>
          </button>

          <button
            class="contact__item contact__item--clickable"
            @click="
              handleContactClick(secondNumber), openPopup('Номер скопирован')
            "
          >
            <span class="contact__icon"><IconContactsPhone /></span>
            <span class="contact__text">{{ secondNumber }}</span>
          </button>
        </li>
        <li
          class="contact__item contact__item--clickable"
          @click="handleContactClick(email), openPopup('Почта скопирована')"
        >
          <span class="contact__icon"><IconContactsMail /></span>
          <span class="contact__text">{{ email }}</span>
        </li>
      </ul>

      <button
        @click="handleContactClick(secondNumber), openPopup('Номер скопирован')"
        @mouseenter="contactButton.onMouseEnter"
        @mouseleave="contactButton.onMouseLeave"
        @mousedown="contactButton.onMouseDown"
        @mouseup="contactButton.onMouseUp"
        class="contact__button button -cta"
      >
        <span class="contact__button-text">Связаться</span>
        <span class="contact__button-icon"
          ><IconArrow
            class="icon-arrow"
            :fillColor="
              contactButton.isActive
                ? 'var(--color-secondary-active)'
                : 'var(--color-secondary)'
            "
            :strokeColor="
              contactButton.isHovered
                ? 'var(--color-primary-hovered)'
                : 'var(--color-primary)'
            "
        /></span>
      </button>
    </section>

    <section class="map">
      <YandexMap />
    </section>
  </div>

  <footer class="footer" role="contentinfo">
    <figure class="footer__logo" aria-label="Логотип компании">
      <IconCompanyLogo />
    </figure>
    <ul class="footer__links">
      <li>
        <a
          class="footer__link lead"
          @click.prevent="openPopup(inDevelopment)"
          role="button"
          href="#"
          >О системе</a
        >
      </li>
      <li>
        <a
          @click.prevent="openPopup(inDevelopment)"
          role="button"
          class="footer__link lead"
          href="#"
          >Архитектура</a
        >
      </li>
      <li>
        <a
          @click.prevent="openPopup(inDevelopment)"
          role="button"
          class="footer__link lead"
          href="#"
          >Вопросы</a
        >
      </li>
      <li>
        <a
          @click.prevent="openPopup(inDevelopment)"
          role="button"
          class="footer__link lead"
          href="#"
          >Отзывы</a
        >
      </li>
      <li>
        <a
          @click.prevent="openPopup(inDevelopment)"
          role="button"
          class="footer__link lead"
          href="#"
          >Для своих</a
        >
      </li>
    </ul>
    <div class="footer__separator"></div>
    <ul class="footer__tos">
      <li class="footer__tos-item">Коллаген © 2025</li>
      <li>
        <a
          @click.prevent="openPopup(inDevelopment)"
          role="button"
          class="footer__tos-item footer__tos-item--highlighted"
          href="#"
        >
          Политика обработки чего-то личного
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
// Vue imports
import { ref, computed, onMounted, onUnmounted } from "vue";

// Composable imports
import { useHoverActive } from "@/composables/useHoverActive";

// Data imports
import cards from "@/data/gallery-cards.json";
import { inputs, benefits } from "@/data/form-component-data.js";

// Components import
import YandexMap from "@/components/YandexMap.vue";
import GallerySlider from "@/components/GallerySlider.vue";
import FormComponent from "@/components/FormComponent.vue";

// Icon imports
import IconArrow from "@/assets/icons/IconArrow.vue";
import IconBurgerMenu from "@/assets/icons/IconBurgerMenu.vue";
import IconCompanyLogo from "@/assets/icons/IconCompanyLogo.vue";
import IconContactsAddress from "@/assets/icons/IconContactsAddress.vue";
import IconContactsClock from "@/assets/icons/IconContactsClock.vue";
import IconContactsMail from "@/assets/icons/IconContactsMail.vue";
import IconContactsPhone from "@/assets/icons/IconContactsPhone.vue";

// Layout variables
const inDevelopment = "Эта страница обязательно будет добавлена!";
const burgerArrow = ref(useHoverActive());
const heroButton = ref(useHoverActive());
const contactButton = ref(useHoverActive());

// Misc
const props = defineProps({
  openPopup: Function,
});

// Close burger-menu on Escape
function handleKeydown(event) {
  if (event.key === "Escape" && isBurgerOpen.value) {
    closeBurgerMenu();
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

// CSS helpers
const width = ref(window.innerWidth);

const isScreenXS = computed(() => width.value < 480);
const isScreenMD = computed(() => width.value >= 640 && width.value < 960);
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

// Burger menu logic
const isBurgerOpen = ref(false);
const isBurgerAnimationActive = ref(false);

function openBurgerMenu() {
  isBurgerOpen.value = true;
  isBurgerAnimationActive.value = true;
}

function closeBurgerMenu() {
  isBurgerOpen.value = false;

  /* Animation on-resize fix */
  setTimeout(() => {
    isBurgerAnimationActive.value = false;
  }, 300);
}

// Contacts logic

const firstNumber = "8 (800) 444 44 44";
const secondNumber = "8 (800) 888 88 88";
const email = "example@mail.ru";

async function handleContactClick(rawText) {
  const text = rawText.trim();
  const isEmail = text.includes("@");

  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
    } else {
      console.log("Ваш браузер не поддерживает копирование :(");
    }
  } catch (err) {
    console.warn("Ошибка копирования:", err);
  }

  if (isEmail) {
    window.location.href = `mailto:${text}`;
  } else {
    const digitsOnly = text.replace(/[^\d+]/g, "");
    window.location.href = `tel:${digitsOnly}`;
  }
}
</script>

<style lang="scss">
@use "@/assets/styles/_home-page.scss";
</style>
