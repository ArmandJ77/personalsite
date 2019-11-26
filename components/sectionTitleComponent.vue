<template>
  <v-container mt-5 mb-5>
    <v-layout>
      <v-flex>
        <h2>{{ title }}</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
h2 {
  letter-spacing: 0.4em !important;
  font-weight: 600 !important;
}
</style>
