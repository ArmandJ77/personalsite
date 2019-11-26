<template>
  <v-card class="pa-2 ma-1 card-layout justify-center primary" tile outlined>
    <h3>{{ description }}</h3>
  </v-card>
</template>

<script>
export default {
  props: {
    description: {
      required: true,
      type: String
    }
  }
}
</script>

<style lang="css" scoped>
.card-layout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
}

h3 {
  font-weight: 300 !important;
  letter-spacing: 0.1em !important;
}


</style>
