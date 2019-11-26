<template>
  <v-container>
    <v-layout justify-center align-center text-center>
      <v-flex xs12 sm12 md12 lg12>
        <a target="_blank" href="http://theioplatform.com">
          <div class="animation-resize">
            <h1>IO</h1>
          </div>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
h1 {
  font-weight: 300 !important;
  letter-spacing: 0.4em;
  font-size: 3em;
}

h3 {
  font-weight: 300 !important;
}
.animation-resize {
  min-height: 100px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.animation-resize:hover {
  cursor: pointer;
  animation: hoverlink 0.3s ease-in forwards;
}

@keyframes hoverlink {
  to {
    font-size: 1.3em;
  }
}
</style>
