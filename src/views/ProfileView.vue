<template>
  <div class="card__container">
    <div class="author__container">
      <TextHeader
        ><img :src="author.pictureUrl" class="tooltip__avatar m-r-2" v-if="showAvatar" />
        <AvatarComponent :text="author.fullName" v-else class="m-r-2" />{{
          author.fullName
        }}</TextHeader
      >
      <TextBody1>Role: {{ author.role }}</TextBody1>
    </div>
    <div class="author__container p-t-3">
      <TextBody1
        ><span class="anchor font-weight--bold">{{ author.publications }}</span>
        Publications</TextBody1
      >
      <TextBody1
        ><span class="anchor font-weight--bold">{{ author.views }}</span> Views</TextBody1
      >
      <TextBody1
        ><span class="anchor font-weight--bold">{{ author.followers }}</span> Followers</TextBody1
      >
      <AffiliationContainer :data="author.affiliations" class="p-t-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import TextBody1 from "@/components/typography/TextBody1.vue";
import TextHeader from "@/components/typography/TextHeader.vue";
import AffiliationContainer from "@/components/AffiliationContainer.vue";
import AvatarComponent from "@/components/AvatarComponent.vue";

import { testImage } from "@/services/helpers";

import * as data from "@/assets/js/frontiers-metropolis-challenge-L1.json";

@Component({ components: { TextBody1, TextHeader, AffiliationContainer, AvatarComponent } })
export default class ProfileView extends Vue {
  protected showAvatar: boolean;
  protected initialData: any;

  constructor() {
    super();
    this.initialData = data;
    this.showAvatar = true;
  }

  get authorId(): any {
    return this.$route.params.id;
  }

  get author(): any {
    return this.initialData.authors.filter((author: any) => author.id == this.authorId)[0];
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
}
</script>
