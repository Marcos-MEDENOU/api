<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import HeroImgVue from '../components/Hero/HeroImg.vue';
import ConfettiExplosion from "vue-confetti-explosion";
</script> -->
<template>
    <Header></Header>
    <body class="container mx-auto mt-4 bg-white w-[70%]">

        <!-- Container -->
        <div class="flex flex-row mt-20">

            <!-- Sidebar -->
            <div class='flex-col justify-between hidden lg:flex lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>

                <div class=''>
                    <h1 class="font-bold lg:text-2xl xl:text-4xl text-[#03224c] xl:leading-snug">Découvrez 
                        de nouvelles
                        expériences sensationnelles qui vous captiveront dès le premier instant</h1>
                    <p class="mt-5 text-[#03224c] text-lg">Vous n'avez pas de compte ?</p>
                    <button
                        class="flex-none inline-block px-4 py-2 mt-2 font-medium text-white bg-[#4b39ef]  hover:bg-[#39d2c0]   rounded-full">Créer
                        compte ici</button>
                </div>
                <p class="mt-10 text-[#03224c] font-medium">© 2023 KMObuilder</p>
            </div>




            <!-- Login box -->
            <div class="flex flex-col justify-center flex-1 max-w-md space-y-5">
                <div class="flex flex-col space-y-2 text-center">
                    <h2 class="text-3xl text-[#03224c] font-bold md:text-4xl">Connectez-vous à votre compte !</h2>

                </div>

                <form class="flex flex-col max-w-md space-y-5" action="" @submit.prevent="onsubmitForm" method="post">
                    <input type="text" placeholder="Nom d'utilisateur"
                        class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal" />
                    <input type="password" placeholder="Mot de passe"
                        class="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal" />
                    <button type="submit"
                        class=" px-3 py-2 font-medium text-center text-white bg-[#4b39ef] hover:bg-[#39d2c0] rounded-lg md:px-4 md:py-3 placeholder:font-normal">
                        Connexion</button>

                    <div class="flex items-center justify-center">
                        <span class="w-full border border-black"></span>
                        <span class="px-4">Ou</span>
                        <span class="w-full border border-black"></span>
                    </div>
                    <button
                        class="relative flex items-center justify-center flex-none px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3">
                        <span class="absolute left-4">
                            <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill="#EA4335 "
                                    d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z" />
                                <path fill="#34A853"
                                    d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z" />
                                <path fill="#4A90E2"
                                    d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z" />
                                <path fill="#FBBC05"
                                    d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z" />
                            </svg>
                        </span>
                        <span class="text-[#03224c]">Connectez-vous avec Google</span>
                    </button>
                </form>
            </div>

        </div>
    </body>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

html,
body {
    font-family: 'Roboto', sans-serif;
}

.break-inside {
    -moz-column-break-inside: avoid;
    break-inside: avoid;
}
</style>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import HeroImgVue from '../components/Hero/HeroImg.vue';
import ConfettiExplosion from "vue-confetti-explosion";
import axios from 'axios';

export default {
    //   layout: MainLayout,
    props: {

    },
    components: {
        Header
    },
    data() {
        return {

        };
    },

    mounted() {

    },

    methods: {
         
        onsubmitForm() {
            //URL de connexion a l'api
            const API_URL = '/Api';
            
            axios.post('/src/Api/api.php?action=login', {
            })
                .then((response) => {
                    console.log(response.data);
                }).catch((error) => {
                    console.log(error.data);
                });
        }
    },

};
</script>

