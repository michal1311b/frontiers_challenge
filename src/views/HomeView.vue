<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TitleContainer msg="Thank you for considering participating to this paper" />
    <Card :data="initialData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TitleContainer from "@/components/typography/TitleContainer.vue";
import Card from "@/components/Card.vue";
import * as data from "@/assets/js/frontiers-metropolis-challenge-L1.json";

@Component({
  components: {
    TitleContainer,
    Card,
  },
})
export default class HomeView extends Vue {
  protected initialData: any;

  constructor() {
    super();
    this.initialData = data;
  }
}
</script>
