<template>
  <div class="logo__icon vertical-align-center" :class="`icon-${setIndex(text)}`">
    {{ setLogo(text) }}
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { createShortcut, getIndex } from "@/extensions/string.extensions";

@Component({})
export default class AvatarComponent extends Vue {
  @Prop({ required: true }) readonly text: string;

  constructor() {
    super();
  }

  setLogo(name: string): string {
    return createShortcut(name);
  }

  setIndex(name: string): number {
    return getIndex(name);
  }
}
</script>
<style scoped lang="scss"></style>
