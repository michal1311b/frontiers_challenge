<template>
  <div class="card__container">
    <TextBody1>{{ data.type }}</TextBody1>
    <TextHeader>{{ data.title }}</TextHeader>

    <div class="author__container">
      <TextLabels>Authors</TextLabels>

      <AuthorLabels v-for="(author, index) in data.authors" :key="index"
        >&nbsp;<span class="cursor__pointer author__name">{{ author.fullName }}</span
        ><sup>{{ index }}</sup
        >,
      </AuthorLabels>
    </div>

    <div class="author__container">
      <TextLabels>Editor</TextLabels>
      <AuthorLabels
        >&nbsp;<span class="cursor__pointer author__name">{{ data.editor.fullName }}</span
        ><sup>1</sup>
      </AuthorLabels>
    </div>

    <div class="author__container">
      <TextLabels>Yourself</TextLabels>
      <AuthorLabels
        >&nbsp;<span class="cursor__pointer author__name">{{ data.yourself.fullName }}</span
        ><sup>1</sup>
      </AuthorLabels>
    </div>

    <AffiliationContainer />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import TextBody1 from "@/components/typography/TextBody1.vue";
import TextHeader from "@/components/typography/TextHeader.vue";
import TextLabels from "@/components/typography/TextLabels.vue";
import AuthorLabels from "@/components/typography/AuthorLabels.vue";
import AffiliationContainer from "@/components/AffiliationContainer.vue";

@Component({
  components: { TextBody1, TextHeader, TextLabels, AuthorLabels, AffiliationContainer },
})
export default class Card extends Vue {
  @Prop() private data: any;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
