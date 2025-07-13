import { ref } from "vue";

export function useHoverActive() {
  const isHovered = ref(false);
  const isActive = ref(false);

  function onMouseEnter() {
    isHovered.value = true;
  }

  function onMouseLeave() {
    isHovered.value = false;
    isActive.value = false;
  }

  function onMouseDown() {
    isActive.value = true;
  }

  function onMouseUp() {
    isActive.value = false;
  }

  return {
    isHovered,
    isActive,
    onMouseEnter,
    onMouseLeave,
    onMouseDown,
    onMouseUp,
  };
}
