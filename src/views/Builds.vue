<template>
  <div class="builds">
    <Stack>
      <legend>{{ checklist }}</legend>

      <!-- -->

      <Button @click="galleryOn = !galleryOn">{{
        !show ? "Add Builds" : "View Builds"
      }}</Button>

      <BuildsGallery v-show="!galleryOn" />

      <!-- Slider bar -->

      <Button @click="crud">Test Serverless Function</Button>

      <!-- Builder -->

      <ul>
        <li v-for="item in checklist">
          <label>{{ item?.name || "item" }}</label>
          <input type="checkbox" checked="item" />
        </li>
      </ul>

      <Gradient class="m-4">
        <Card class="text-white bg-regal-600" @click="addPart">
          <template v-slot:header>
            <label class="text-5xl">D.D. MS-KMR-13</label>
          </template>
          <template v-slot:default>
            <img src="images[0].src" alt="lower" />
            <span>lorem ipsum shootsum hitsum</span>
          </template>
          <template v-slot:footer>
            <button class="text-5xl text-white border-radius">+</button>
          </template>
        </Card>
      </Gradient>

      <Gradient class="m-4">
        <Card class="text-white bg-regal-600" @click="addPart">
          <template v-slot:header>
            <label class="text-5xl">D.D. MS-KMR-13</label>
          </template>
          <template v-slot:default>
            <span>lorem ipsum shootsum hitsum</span>
          </template>
          <template v-slot:footer>
            <button class="text-5xl text-white border-radius">+</button>
          </template>
        </Card>
      </Gradient>

      <iframe
        v-if="false"
        class="airtable-embed airtable-dynamic-height"
        src="https://airtable.com/embed/shrtU3kYArQSfPHvs?backgroundColor=blue"
        frameborder="0"
        onmousewheel=""
        width="100%"
        height="1014"
        style="background: transparent; border: 1px solid #ccc"
      ></iframe>
    </Stack>
  </div>
</template>
<script>
import Slider from '@vueform/slider'
import Button from "../components/atoms/Button.vue";
import BuildsGallery from "../components/builds/BuildsGallery.vue";
import Card from "../components/molecules/Card.vue";
import Stack from "../components/flex/Stack.vue";
import Row from "../components/flex/Row.vue";
import Gradient from "../components/atoms/Gradient.vue";
import axios from "axios";
export default {
  data() {
    return {
      galleryOn: false,
      builderOn: true,

      // Slider
      value: 20

      // Sample images
      images: [
        {
          src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsilencerco.com%2Fwp-content%2Fuploads%2F2020%2F07%2Fsco15-techspecs-600x323.png&f=1&nofb=1"
          alt: "lower"
        },
        {
          src:"https://cdn2.bigcommerce.com/n-ww20x/b5uhp/products/449/images/1396/B-872__21042.1482950790.1280.1280.png?c=2"
        , alt: 'barrel'
        }
      ]

      //Builder's Checklist
      build: {
        parts: [],
        profile: { id: "12345", Name: "MP" },
      },

      checklist: {
        buffer: {
          spring: null,
          tube: null,
          alt: null,
        },
        upper: {
          handguard: null,
          barrel: null,
          bcg: null,
          gasblock: null,
          gastube: null,
        },
        buttstock: { id: null, brand: "" },
        lower: {
          LPK: {
            brand: "",
          },
        },
      },
    };
  },
  methods: {
    addPart() {
      const { checklist } = this;
      const { buffer, upper, buttstock, lower } = checklist;
      upper.barrel = "BCM fluted lw 5.56 NATO barrel";
      upper.name = "MS-KMR-13";
      upper.bcg = "BCM 5.56 NATO BCG Nitrided";
      buttstock.brand = "Bravo Company";
      return null;
    },
    crud() {
      const url = `api/sendMessage?name=${this.checklist.upper.name}`;
      // console.log("url", url);
      axios
        .get(url)
        .then((response) => {
          console.log(response);
          // info.result = response.data;
        })
        .catch((err) => {
          // if (devmode) info.message = err;
          console.log("err :>> ", err);
        });
    },
  },
  components: {
    BuildsGallery,
    Button,
    Stack,
    Card,
    Gradient,
    Slider,
  },
};
</script>
<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
html,
body {
  min-height: 100vh;
  background-color: #030303;
}
</style>
