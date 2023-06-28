<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../components/Home/Navbar.vue'
import Hero from '../components/Home/Hero.vue';
import About from '../components/Home/About.vue';
import Pricing from '../components/Home/Pricing.vue';
import Footer from '../components/Home/Footer.vue';
import ConfettiExplosion from "vue-confetti-explosion";

</script>

<script setup>
</script>

<template>
  <ConfettiExplosion />
  <Navbar />
  <Hero />
  <About />
  <Pricing />
  <Footer />

  <RouterView />
</template>
