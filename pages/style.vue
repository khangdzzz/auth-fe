<script lang="ts" setup>
definePageMeta({
  layout: 'blank'
})
const colors = ['primary', 'text', 'textplaceholder', 'textonprimary', 'border', 'background']
</script>
<template>
  <v-app>
    <v-main class="vuetify-page">
      <ul class="section -colors">
        <li v-for="color in colors" :key="color" class="color">
          <div class="color" :class="[`-${color}`]" />
          <p class="colorname">
            {{ color }}
          </p>
        </li>
      </ul>
      <section class="section -typography">
        <h1>Title</h1>
        <h2>Title</h2>
        <h3>Title</h3>
        <h4>Title</h4>
        <h5>Title</h5>
        <h6>Title</h6>
        <p>Normal text</p>
      </section>
      <section class="section -buttons">
        <div class="type -big">
          <v-btn size="x-large" class="button">
            Enabled
          </v-btn>
          <v-btn size="x-large" class="button" disabled>
            Disabled
          </v-btn>
        </div>
        <div class="type -medium">
          <v-btn class="button">
            Enabled
          </v-btn>
          <v-btn class="button" disabled>
            Disabled
          </v-btn>
        </div>
        <div class="type -small">
          <v-btn size="small" class="button">
            Enabled
          </v-btn>
          <v-btn size="small" class="button" disabled>
            Disabled
          </v-btn>
        </div>
        <div class="type -texticon">
          <v-btn variant="plain" append-icon="mdi-chevron-right">
            Enabled
          </v-btn>
          <v-btn variant="plain" append-icon="mdi-chevron-right" disabled>
            Disabled
          </v-btn>
        </div>
      </section>
      <section class="section -input">
        <div class="type -textfield">
          <v-text-field placeholder="プレースポルダー" class="input" />
          <v-text-field placeholder="プレースポルダー" class="input" disabled />
          <v-text-field placeholder="プレースポルダー" class="input" error />
        </div>
        <div class="type -textarea">
          <v-textarea placeholder="プレースポルダー" class="input" />
          <v-textarea placeholder="プレースポルダー" class="input" disabled />
          <v-textarea placeholder="プレースポルダー" class="input" error />
        </div>
        <div class="type -checkbox">
          <v-checkbox label="Checkbox" />
          <v-checkbox label="Checkbox" />
        </div>
        <div class="type -select">
          <v-select
            label="Select"
            class="input"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          />
        </div>
        <div class="type -radio">
          <v-radio-group inline>
            <v-radio label="Radio 1" value="1" />
            <v-radio label="Radio 2" value="2" />
            <v-radio label="Radio 3" value="3" />
          </v-radio-group>
        </div>
      </section>
    </v-main>
  </v-app>
</template>
<style lang="scss">
.vuetify-page {
  padding: 50px;
  background-color: #FFFFFF;
  > .section {
    margin-bottom: 10px;
  }
  > .section.-colors {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  > .section.-colors > .color {
    width: 33%;
  }
  > .section.-colors > .color > .color {
    width: 60px;
    height: 60px;
    &.-primary { background-color: rgb(var(--v-theme-primary)) }
    &.-text { background-color: rgb(var(--v-theme-text)) }
    &.-textplaceholder { background-color: rgb(var(--v-theme-text-placeholder)) }
    &.-textonprimary { background-color: rgb(var(--v-theme-on-primary)) }
    &.-border { background-color: rgb(var(--v-theme-border)) }
    &.-background { background-color: rgb(var(--v-theme-background)) }
  }
  > .section.-buttons > .type {
    margin-bottom: 10px;
  }
  > .section.-buttons > .type > .button {
    margin: 10px;
  }
  > .section.-input > .type > .input {
    margin-bottom: 20px;
  }
}
</style>
