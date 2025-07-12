<template>
  <header class="header">
    <IconCompanyLogo class="header__logo" />
    <nav class="header__nav">
      <a class="header__nav-element" href="#">О системе</a>
      <a class="header__nav-element" href="#">Архитектура</a>
      <a class="header__nav-element" href="#">Мнения</a>
      <a class="header__nav-element header__cta" href="#">Попробовать</a>
      <a class="header__nav-element" href="#">Для своих</a>
    </nav>
    <div class="header__burger-menu">
      <IconBurgerMenu />
    </div>
  </header>

  <section class="hero">
    <div class="hero__video-wrapper">
      <div class="hero__video-placeholder"></div>

      <video class="hero__video" autoplay muted loop playsinline preload="auto">
        <source src="@/../public/assets/Hero-video.mp4" type="video/mp4" />
        К сожалению, воспроизведение видео в Вашем браузере не поддерживается.
      </video>
    </div>

    <div class="hero__text">
      <h1 class="hero__title">
        Просто потому <br />
        что можем <br />
        с Collagen
      </h1>
      <p class="hero__desc lead">
        Мы запустили основной цикл в 06:42.<br />Результаты наблюдаются, но не
        зафиксированы.<br />Рекомендуем сохранять спокойствие до следующего
        сигнала.
      </p>
      <button class="button hero__button -cta" href="#">
        <div class="hero__button__text">Попробовать просто так</div>
        <IconArrow class="hero__button__icon" />
      </button>

      <div class="hero__note note">
        Сертификат есть. Но это не точно. СГР №AM.01.01 .01.003.R.00 o47 4.06.24
      </div>
    </div>
  </section>

  <section class="gallery">
    <h2 class="gallery__title">Это — не совсем то, что вы думаете</h2>
    <div class="gallery__controls" v-if="!isMobile">
      <button @click="scrollLeft" class="gallery__arrow">←</button>
      <button @click="scrollRight" class="gallery__arrow">→</button>
    </div>

    <div class="gallery__row" ref="galleryRef" tabindex="0">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="gallery__item"
        :class="{ 'is-hovered': isMobile }"
      >
        <img :src="card.image" alt="" class="gallery__img" />
        <div class="gallery__overlay">
          <h4 class="gallery__title">{{ card.title }}</h4>
          <p class="gallery__text">{{ card.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="form">
    <div class="form__box">
      <h3 class="form__title">Если вы тоже решили «а почему бы и нет»</h3>
      <ul class="form__benefits">
        <li>Можно заказать много</li>
        <li>Доступ возможен через северный интерфейс</li>
        <li>Можно просто поболтать</li>
      </ul>
      <form class="form__fields">
        <input type="text" placeholder="Имя" required />
        <input type="tel" placeholder="Телефон" required />
        <label class="form__checkbox">
          <input type="checkbox" checked />
          Согласен(-на) на обработку чего угодно — лишь бы форма работала
        </label>
        <button class="button button--cta" type="submit">Отправить</button>
      </form>
    </div>
  </section>

  <footer class="footer"></footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

import cards from "@/data/gallery_cards.json";

import IconArrow from "@/assets/icons/IconArrow.vue";
import IconBurgerMenu from "@/assets/icons/IconBurgerMenu.vue";
import IconCompanyLogo from "@/assets/icons/IconCompanyLogo.vue";

onMounted(() => {
  window.addEventListener("resize", debouncedResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", debouncedResize);
});

// Gallery slider starts
const galleryRef = ref(null);
const width = ref(window.innerWidth);

const debounce = (fn, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
};

const updateWidth = () => {
  width.value = window.innerWidth;
};

const debouncedResize = debounce(updateWidth, 250);

const isMobile = computed(() => width.value <= 960);

const scrollByAmount = 300;

const scrollLeft = () => {
  galleryRef.value?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
};

const scrollRight = () => {
  galleryRef.value?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
};

// Gallery slider ends
</script>

<style lang="scss">
@use "@/assets/styles/page.scss";
</style>
