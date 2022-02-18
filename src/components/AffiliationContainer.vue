<template>
  <div>
    <AnchorLabel />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AnchorLabel from "@/components/typography/AnchorLabel.vue";

@Component({ components: { AnchorLabel } })
export default class AffiliationContainer extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
