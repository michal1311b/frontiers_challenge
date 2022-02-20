<template>
  <div>
    <div class="tooltip__textContainer">
      <div class="tooltip__headerContainer">
        <div class="tooltip__header p-r-1">
          {{ author.fullName }}
          <div class="tooltip__subheader">
            {{ author.role }}, {{ affiliationName }}, {{ affiliationCountry }}
          </div>
        </div>
        <img :src="author.pictureUrl" class="tooltip__avatar" v-if="author.pictureUrl" />
        <AvatarComponent :text="author.fullName" v-else />

        <div class="tooltip__statContainer p-t-1">
          <div>
            <span class="anchor font-weight--bold">{{ author.publications }}&nbsp;</span>
            <span class="affiliationText">Publications</span>
          </div>
          <div>
            <span class="anchor font-weight--bold">{{ author.views }}&nbsp;</span>
            <span class="affiliationText">Views</span>
          </div>
          <div>
            <span class="anchor font-weight--bold">{{ author.followers }}&nbsp;</span>
            <span class="affiliationText">Followers</span>
          </div>
        </div>
      </div>
    </div>
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
