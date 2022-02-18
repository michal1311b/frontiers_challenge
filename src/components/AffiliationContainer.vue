<template>
  <div>
    <AnchorLabel v-on:show="showAffiliation($event)" />
    <div v-if="openClose">test</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AnchorLabel from "@/components/typography/AnchorLabel.vue";

@Component({ components: { AnchorLabel } })
export default class AffiliationContainer extends Vue {
  protected openClose: boolean;

  constructor() {
    super();
    this.openClose = true;
  }

  showAffiliation(event: boolean) {
    this.openClose = event;
  }

  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
