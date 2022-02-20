<template>
  <div>
    <AnchorLabel v-on:show="showAffiliation($event)" />
    <div v-if="openClose">
      <AffiliationLabel v-for="(affiliation, index) in data" :key="index">
        <sup>{{ affiliation.id }}</sup> {{ affiliation.name }}, {{ affiliation.city }},
        {{ affiliation.country }}
      </AffiliationLabel>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AnchorLabel from "@/components/typography/AnchorLabel.vue";
import AffiliationLabel from "@/components/typography/AffiliationLabel.vue";

@Component({ components: { AnchorLabel, AffiliationLabel } })
export default class AffiliationContainer extends Vue {
  @Prop() private data: any;
  protected openClose: boolean;

  constructor() {
    super();
    this.openClose = true;
  }

  showAffiliation(event: boolean) {
    this.openClose = event;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
