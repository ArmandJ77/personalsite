<template>
  <v-container>
    <v-layout justify-center align-center text-center>
      <v-flex xs12 sm6 md6 lg6>
        <a target="_blank" href="https://www.linkedin.com/in/armandjordaan/">
          <div class="single_contact-layout">
            <h1>LI</h1>
          </div>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6>
        <a target="_blank" href="https://github.com/ArmandJ77">
          <div class="single_contact-layout">
            <h1>GH</h1>
          </div>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6>
        <a target="_blank" href="https://github.com/ArmandJ77">
          <div class="single_contact-layout">
            <h1>MD</h1>
          </div>
        </a>
      </v-flex>
      <v-flex xs12 sm6 md6 lg6>
        <a target="_blank" href="https://github.com/ArmandJ77">
          <div class="single_contact-layout">
            <h1>TWT</h1>
          </div>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scope>
.single_contact-layout {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
}

.single_contact-layout:hover {
  cursor: pointer;
  animation: hoverlink 0.3s ease-in forwards;
}

h1 {
  font-weight: 300 !important;
}

@keyframes hoverlink {
  to {
    font-size: 1.3em;
  }
}

a {
  color: white !important;
  text-decoration: none !important;
}

.custom-line {
  border-bottom: 1px #ff021b solid;
}
</style>
