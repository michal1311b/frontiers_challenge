<template>
  <div class="tooltip__textContainer">
    <div class="tooltip__headerContainer m-r-1">
      <div class="tooltip__header">{{ author.fullName }}</div>
      <div class="tooltip__subheader">
        {{ author.role }}, {{ affiliationName }}, {{ affiliationCountry }}
      </div>
    </div>

    <img :src="author.pictureUrl" class="tooltip__avatar" v-if="author.pictureUrl" />
    <AvatarComponent :text="author.fullName" v-else />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import TextBody1 from "@/components/typography/TextBody1.vue";
import TextHeader from "@/components/typography/TextHeader.vue";
import AvatarComponent from "@/components/AvatarComponent.vue";

@Component({ components: { TextBody1, TextHeader, AvatarComponent } })
export default class ToolTipContent extends Vue {
  @Prop() private author: any;

  get affiliationCity(): string {
    return this.author.affiliations[0].city;
  }

  get affiliationCountry(): string {
    return this.author.affiliations[0].country;
  }

  get affiliationName(): string {
    return this.author.affiliations[0].name;
  }
}
</script>
