<template>
  <section
    v-show="!isMapLoaded"
    class="yandex-map-placeholder"
    aria-label="Загрузка карты"
  ></section>
  <section
    v-show="isMapLoaded"
    id="map"
    class="yandex-map"
    aria-label="Карта Яндекс"
  ></section>
</template>

<script setup>
// Vue imports
import { onMounted, ref } from "vue";

// Layout variables
const isMapLoaded = ref(false);

// Misc
onMounted(() => {
  ymaps.ready(() => {
    const map = new ymaps.Map("map", {
      center: [59.994261, 30.438012],
      zoom: 15,
      controls: ["zoomControl", "geolocationControl"],
    });

    const placemark = new ymaps.Placemark([59.994261, 30.438012], {
      balloonContent: "Хорошее место!",
    });

    map.geoObjects.add(placemark);

    placemark.events.add("balloonopen", () => {
      const mapCenter = map.getGlobalPixelCenter();
    });

    isMapLoaded.value = true;
  });
});
</script>

<style lang="scss">
@use "@/assets/styles/components/_yandex-map.scss";
</style>
