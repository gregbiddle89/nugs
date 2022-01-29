<template>
  <div>
    <!-- Navbar/Sidebar -->
    <sidebar />

    <!-- Routing -->
    <router-view v-slot="{ Component }">
      <transition name="route" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>

    <Footer>
      <Stack>
        <Row>
          <label>Resources</label>
          <a href="http://opticsplanet.com/">PewPew Tactical</a>
          <a href="https://www.arbuildjunkie.com/">AR Build Junkie</a>
        </Row>
        <Row>
          <label>My Favorites</label>
          <a href="http://opticsplanet.com/">OpticsPlanet</a>
        </Row>
        <a href="#">FAQ</a>
        <a href="https://github.com/mikepreston17">GitHub</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </Stack>
    </Footer>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
import Footer from "./components/molecules/Footer.vue";
import Stack from "./components/flex/Stack.vue";
import Row from "./components/flex/Row.vue";
import Gradient from "./components/atoms/Gradient.vue";

export default {
  components: { Sidebar, Footer, Stack, Row, Gradient },
};
</script>
<style global>
/* No hover borders */
input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

/* Todo: move to tailwind component */
input.bullet-border {
  border: 2px solid #42b983;
  border-radius: 0% 50% 50% 0%;
  outline: none;
}

/* Auto-center component and contents */
.gentle-flex {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1ch;
}

#app {
  font-family: "Trebuchet MS", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

/*route transitions*/
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.route-enter-active {
  transition: all 0.15s ease-in-out;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.15s ease-in;
}
</style>
