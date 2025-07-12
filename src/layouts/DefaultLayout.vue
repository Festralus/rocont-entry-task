<template>
  <div class="layout">
    <div class="layout__background_shapes" aria-hidden="true"></div>

    <main class="layout__content">
      <slot />
    </main>
  </div>
</template>

<script setup></script>

<style lang="scss">
@use "@/assets/styles/default-layout.scss";
</style>
