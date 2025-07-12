<template>
  <form class="form" @submit.prevent="submit">
    <input class="form__input" v-model="name" placeholder="Ваше имя" />
    <button class="form__button" type="submit">Отправить</button>
  </form>
</template>

<script setup>
import { ref } from "vue";
const name = ref("");

const submit = () => {
  alert(`Привет, ${name.value}!`);
};
</script>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__input {
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid #ccc;
  }

  &__button {
    padding: 0.8rem 1.2rem;
    background-color: var(--color-primary);
    color: white;
    border: none;
    cursor: pointer;
  }
}
</style>
