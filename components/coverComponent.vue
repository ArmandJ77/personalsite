<template>
  <h1 class="primary--text cover-text easein-animation">ARMAND JORDAAN</h1>
</template>

<script>
export default {}
</script>

<style>
.cover-text {
  font-weight: 300;
  /* letter-spacing: 0.4em; */
}

.easein-animation {
  opacity: 0;
  animation: in 0.6s ease-out forwards;
  animation-delay: 1s;
}

@keyframes in {
  0% {
    letter-spacing: 0em;
    opacity: 0;
  }
  80% {
    opacity: 1;
  }
  100% {
    letter-spacing: 0.4em;
    opacity: 1;
  }
}
</style>
