<template>
  <svg
    :width="width + 'px'"
    :height="width / 2.4 + 'px'"
    viewBox="0 0 48 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_95_5136)">
      <rect
        x="48"
        width="20"
        height="48"
        rx="10"
        transform="rotate(90 48 0)"
        :fill="fillColor"
      />
      <path
        d="M34 0V0C34 5.52285 38.4772 10 44 10V10"
        :stroke="strokeColor"
        stroke-width="2"
      />
      <path
        d="M33.875 20V20C33.875 14.4772 38.3522 10 43.875 10H44H-10"
        :stroke="strokeColor"
        stroke-width="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_95_5136">
        <rect
          x="48"
          width="20"
          height="48"
          rx="10"
          transform="rotate(90 48 0)"
          :fill="fillColor"
        />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
const props = defineProps({
  strokeColor: {
    type: String,
    default: "#1F8B48",
  },
  fillColor: {
    type: String,
    default: "#ffffff",
  },
  width: {
    type: [String, Number],
    default: 48,
  },
});
</script>
