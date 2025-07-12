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
        <source src="/assets/Hero-video.mp4" type="video/mp4" />
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
      <button class="button hero__button" href="#">
        <div class="hero__button-text">Попробовать просто так</div>
        <IconArrow class="hero__button-icon" />
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
    <h2 class="form__title">Если вы тоже решили «а почему бы и нет»</h2>
    <ul class="form__benefits">
      <li class="form__benefit">
        <div class="form__benefit-icon"><IconArrowSmall /></div>
        <div class="form__benefit-text">Можно заказать много</div>
      </li>
      <li class="form__benefit">
        <div class="form__benefit-icon"><IconArrowSmall /></div>
        <div class="form__benefit-text">
          Доступ возможен через северный интерфейс
        </div>
      </li>
      <li class="form__benefit">
        <div class="form__benefit-icon"><IconArrowSmall /></div>
        <div class="form__benefit-text">Можно просто поболтать</div>
      </li>
    </ul>
    <form class="form__fields">
      <input type="text" class="form__input" placeholder="Имя" required />
      <input type="tel" class="form__input" placeholder="Телефон" required />

      <div class="form__checkbox">
        <input type="checkbox" id="checkbox" class="form__checkbox-input" />
        <label for="checkbox" class="form__checkbox-label note select-none">
          Согласен(-на) на обработку чего угодно — лишь бы форма работала
        </label>
      </div>

      <button @click.prevent class="button form__button" type="submit">
        <div class="hero__button-text">Отправить</div>
        <IconArrow
          class="hero__button-icon"
          :fill-color="'var(--color-primary)'"
          :stroke-color="'var(--color-secondary)'"
        />
      </button>
    </form>
  </section>

  <section class="contact">
    <h2 class="contact__title">Контакты</h2>

    <ul class="contact__list lead">
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
      <li class="contact__item">
        <span class="contact__icon"><IconContactsPhone /></span>
        <span class="contact__text">8 (800) 444 44 44</span>
      </li>
      <li class="contact__item">
        <span class="contact__icon"><IconContactsPhone /></span>
        <span class="contact__text">8 (800) 888 88 88</span>
      </li>
      <li class="contact__item">
        <span class="contact__icon"><IconContactsMail /></span>
        <span class="contact__text">example@mail.ru</span>
      </li>
    </ul>

    <button class="contact__button button -cta">
      <span class="contact__button-text">Связаться</span>
      <span class="contact__button-icon"><IconArrow /></span>
    </button>
  </section>

  <section class="map">
    <YandexMap />
  </section>

  <footer class="footer">
    <div class="footer__logo"><IconCompanyLogo /></div>
    <ul class="footer__links">
      <li class="footer__link lead">О системе</li>
      <li class="footer__link lead">Архитектура</li>
      <li class="footer__link lead">Вопросы</li>
      <li class="footer__link lead">Отзывы</li>
      <li class="footer__link lead">Для своих</li>
    </ul>
    <div class="footer__separator"></div>
    <ul class="footer__tos">
      <li class="footer__tos-item">Коллаген © 2025</li>
      <li class="footer__tos-item">Политика обработки чего-то личного</li>
    </ul>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

import cards from "@/data/gallery_cards.json";

import YandexMap from "@/components/YandexMap.vue";

import IconArrow from "@/assets/icons/IconArrow.vue";
import IconArrowSmall from "@/assets/icons/IconArrowSmall.vue";
import IconBurgerMenu from "@/assets/icons/IconBurgerMenu.vue";
import IconCompanyLogo from "@/assets/icons/IconCompanyLogo.vue";
import IconContactsAddress from "@/assets/icons/IconContactsAddress.vue";
import IconContactsClock from "@/assets/icons/IconContactsClock.vue";
import IconContactsMail from "@/assets/icons/IconContactsMail.vue";
import IconContactsPhone from "@/assets/icons/IconContactsPhone.vue";

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
