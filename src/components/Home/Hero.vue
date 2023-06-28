<script setup>
import HeroImgVue from '../Hero/HeroImg.vue';

</script>

<script setup>
</script>

<template>
  
  
  <main class="pt-10 lg:pt-5">
    <!-- <Particles id="tsparticles" :particlesInit="particlesInit" :options="particlesOptions" /> -->
  

    <section class="items-center lg:flex justify-center lg:container lg:mx-auto px-20  ">
      <article class="xl:w-[50%] lg:w-9/12">
        <h2 class="py-4 font-extrabold text-2xl tracking-tight leading-none text-[#03224c] md:text-4xl lg:text-4xl">Créez des sites web époustouflants en un clin d'œil avec notre puissant page builder</h2>
        <p class="py-2 mt-2 text-lg   text-[#03224c] lg:text-2xl  ">Libérez votre créativité et réalisez des designs exceptionnels sans aucune limite !</p>
        
        <p class="py-2 text-lg   text-[#03224c] lg:text-2xl  ">Concevez des sites web remarquables, personnalisez chaque détail et faites de votre présence en ligne une expérience inoubliable. Avec <span class="font-bold">KMObuilder</span> , la seule limite  est votre créativité. </p>

        
        <a href="#"
          class="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center text-white rounded-full mt-3 bg-[#4b39ef] hover:bg-[#39d2c0] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          Commencer
          <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </a>
      </article>
      
      <div>
        <HeroImgVue />
    </div>
  </section>

  <RouterView />
</main></template>
