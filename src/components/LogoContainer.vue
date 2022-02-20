<template>
  <div class="logo__container">
    <div class="animation__container">
      <div class="paper__container">
        <div class="firstPaper"></div>
        <div class="secondPaper"></div>
        <div class="paper__sheet">
          <div class="paper__arrow"></div>

          <div class="success-checkmark"></div>
          <div class="paper__content">
            <div class="paper__content__line"></div>
            <div class="paper__content__line"></div>
            <div class="paper__content__line"></div>
          </div>
        </div>
      </div>

      <div class="horizontalLine"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
export default class LogoContainer extends Vue {}
</script>
