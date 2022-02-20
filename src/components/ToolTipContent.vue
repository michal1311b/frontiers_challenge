<template>
  <div class="tooltiptext">
    {{ author.fullName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TextBody1 from "@/components/typography/TextBody1.vue";
import TextHeader from "@/components/typography/TextHeader.vue";

@Component({ components: { TextBody1, TextHeader } })
export default class ToolTipContent extends Vue {
  @Prop() private author: any;
}
</script>
