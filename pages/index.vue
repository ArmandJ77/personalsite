<template>
  <v-container grid-list fill-height fluid pa-0>
    <v-layout row wrap ma-0>
      <v-flex secondary justify-center align-center text-center hidden-sm-and-up>
        <div class="cover">
          <coverComponent></coverComponent>
        </div>
      </v-flex>
      <v-flex primary hidden-sm-and-up text-center>
        <v-spacer class="d-none d-xl-flex" style="height:180px;"></v-spacer>
        <v-spacer class="d-none d-lg-flex" style="height:30px;"></v-spacer>
        <v-spacer class="d-none d-md-flex" style="height:40px;"></v-spacer>
        <v-spacer class="d-sm-flex" style="height:40px;"></v-spacer>
        <sectionTitleComponent title="STACK"></sectionTitleComponent>
        <technologyComponent></technologyComponent>
        <v-spacer class="d-none d-xl-flex" style="height:200px;"></v-spacer>
        <sectionTitleComponent title="FOUNDED"></sectionTitleComponent>
        <projectHighlightComponent></projectHighlightComponent>
        <v-spacer class="d-none d-xl-flex" style="height:200px;"></v-spacer>
        <sectionTitleComponent title="CONTACT"></sectionTitleComponent>
        <contactComponent></contactComponent>
      </v-flex>

      <v-flex
        xs12
        sm6
        md6
        lg6
        justify-center
        align-center
        text-center
        pl-5
        pr-5
        secondary
        hidden-xs-only
        fill-height
      >
        <div class="cover">
          <coverComponent></coverComponent>
        </div>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6 text-center primary hidden-xs-only>
        <v-spacer class="d-none d-xl-flex" style="height:100px;"></v-spacer>
        <v-spacer class="d-none d-lg-flex" style="height:40px;"></v-spacer>
        <v-spacer class="d-none d-md-flex" style="height:40px;"></v-spacer>
        <div class="fade-in">
          <sectionTitleComponent title="STACK"></sectionTitleComponent>
          <technologyComponent></technologyComponent>
          <v-spacer class="d-none d-xl-flex" style="height:200px;"></v-spacer>
          <sectionTitleComponent title="FOUNDED"></sectionTitleComponent>
          <projectHighlightComponent></projectHighlightComponent>
          <v-spacer class="d-none d-xl-flex" style="height:200px;"></v-spacer>
          <sectionTitleComponent title="CONTACT"></sectionTitleComponent>
          <contactComponent></contactComponent>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import coverComponent from '~/components/coverComponent'
import technologyComponent from '~/components/technologyComponent'
import sectionTitleComponent from '~/components/sectionTitleComponent'
import projectHighlightComponent from '~/components/projectHighlightComponent'
import contactComponent from '~/components/contactComponent'
export default {
  components: {
    coverComponent,
    technologyComponent,
    sectionTitleComponent,
    contactComponent,
    projectHighlightComponent
  }
}
</script>

<style>
.cover {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.fade-in {
  opacity: 0;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-direction: alternate;
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-delay: 2s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
