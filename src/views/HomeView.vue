<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Thank you for considering participating to this paper" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import * as data from "@/assets/js/frontiers-metropolis-challenge-L1.json";

@Component({
  components: {
    HelloWorld,
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
