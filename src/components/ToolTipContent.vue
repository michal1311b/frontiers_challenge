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
        <img :src="author.pictureUrl" class="tooltip__avatar" v-if="showAvatar" />
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
          <div class="tooltip__viewProfile anchorPopup p-t-2" @click="showProfile(author.id)">
            <img src="@/assets/shortcut.svg" class="tooltip__viewProfile__icon p-r-1" /> View
            profile
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

import { testImage } from "@/services/helpers";

@Component({ components: { TextBody1, TextHeader, AvatarComponent } })
export default class ToolTipContent extends Vue {
  protected showAvatar: boolean;
  @Prop() private author: any;

  constructor() {
    super();
    this.showAvatar = true;
  }

  get affiliationCity(): string {
    return this.author.affiliations[0].city;
  }

  get affiliationCountry(): string {
    return this.author.affiliations[0].country;
  }

  get affiliationName(): string {
    return this.author.affiliations[0].name;
  }

  created() {
    this.isImgCorrect();
  }

  isImgCorrect(): any {
    return testImage(this.author.pictureUrl).then((response) => {
      return this.setResponse(response);
    });
  }

  setResponse(data: any) {
    this.showAvatar = data;
    if (data) {
      return data;
    }
    return false;
  }

  showProfile(id: string): void {
    this.$router.push({
      name: "profile",
      params: { id: id },
    });
  }
}
</script>
