<template>
  <Row class="text-midnight bg-gradient-to-r from-tahiti-500 to-ocean-500">
    <Border class="w-1/3">
      <slot name="left"></slot>
    </Border>
    <Border class="w-1/3">
      <slot></slot>
    </Border>
    <Border class="w-1/3">
      <slot name="right"></slot>
    </Border>
  </Row>
</template>
<script>
import { Right, Left, Row } from "../../components/flex";
import { Border } from "../../components/atoms";
export default {
  components: {
    Left,
    Right,
    Row,
    Border,
  },
};
</script>

<!-- 
TODO: https://vuetifyjs.com/en/introduction/roadmap/#v30-titan
  <v-footer dark padless>
    <v-card flat tile class="text-center indigo lighten-1 white--text">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0 white--text">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet.
        Mauris cursus commodo interdum. Praesent ut risus eget metus luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus
        iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor
        vel ut orci. Orci varius natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-card-text>
    </v-card>
  </v-footer>

  
-->
