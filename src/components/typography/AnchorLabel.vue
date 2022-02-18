<template>
  <span class="anchor cursor__pointer d-flex align-center" @click="showHide">
    Affiliation <i class="arrow" :class="[{ down: show }, { up: !show }]"></i>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AnchorLabel extends Vue {
  protected show: boolean;

  constructor() {
    super();
    this.show = true;
  }

  showHide(): boolean {
    this.show = !this.show;

    this.$emit("show", this.show);

    return this.show;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
