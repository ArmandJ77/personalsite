<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm12 md12 lg12>
        <techCardComponent description=".NET"></techCardComponent>
        <techCardComponent description="VUE"></techCardComponent>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12>
        <techCardComponent description="NODEJS"></techCardComponent>
        <techCardComponent description="REACT"></techCardComponent>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import techCardComponent from '~/components/techCardComponent'
export default {
  components: {
    techCardComponent
  }
}
</script>
