<script setup>
import AppLogo from '../Logo.vue'
import Icons from '../icons/Icons.vue';
import { ref } from 'vue'
defineProps({
    msg: {
        type: String,
        required: true
    }
})


const menuVisible = ref(false);
const showClosebtn = ref(false);
const showMenubtn = ref(true);

const showMenu = () => {
    menuVisible.value = !menuVisible.value
    showClosebtn.value = true;
    showMenubtn.value = false;
}

const closeMenu = () => {
    menuVisible.value = !menuVisible.value
    showClosebtn.value = false;
    showMenubtn.value = true;
}
</script>

<template>
    <div class="sticky top-0 shadow-lg bg-white z-50">
        <div class="lg:container lg:mx-auto px-20 py-2  flex justify-between items-center ">
            <div class="w-32 h-10">
                <AppLogo />
            </div>
            <div>
                <nav class="hidden lg:flex">
                    <ul class="flex items-center justify-center gap-4 font-semibold cursor-pointer text-[#03224c]">

                        <li :class="{ 'text-[#39d2c0] border-b border-b-green-300': $route.path === '/' }" class="hover:text-[#39d2c0] hover:border-b hover:border-b-green-300">
                            <router-link to="/" exact>Accueil</router-link>
                        </li>
                        <li :class="{ 'text-[#39d2c0] border-b border-b-green-300': $route.path === '#' }" class="hover:text-[#39d2c0] hover:border-b hover:border-b-green-300">
                            <router-link to="#" exact>Templates</router-link>
                        </li>
                        <li :class="{ 'text-[#39d2c0] border-b border-b-green-300': $route.path === '#' }" class="hover:text-[#39d2c0] hover:border-b hover:border-b-green-300">
                            <router-link to="#" exact>Nouveautés</router-link>
                        </li>
                        <li :class="{ 'text-[#39d2c0] border-b border-b-green-300': $route.path === '#' }" class="hover:text-[#39d2c0] hover:border-b hover:border-b-green-300">
                            <router-link to="#" exact>A propos</router-link>
                        </li>

                    </ul>
                </nav>

                <nav  v-if="menuVisible">
                    <ul class="absolute bg-white border rounded-xl shadow-lg text-center container mx-auto top-[4rem] left-0 right-0   font-semibold cursor-pointer text-[#03224c] flex flex-col gap-5 py-4">

                        <li :class="{ 'text-[#39d2c0] ': $route.path === '/' }" class="hover:text-[#39d2c0] ">
                            <router-link to="/" exact>Accueil</router-link>
                        </li>
                        <li :class="{ 'text-[#39d2c0] ': $route.path === '#' }" class="hover:text-[#39d2c0] ">
                            <router-link to="#" exact>Templates</router-link>
                        </li>
                        <li :class="{ 'text-[#39d2c0] ': $route.path === '#' }" class="hover:text-[#39d2c0] ">
                            <router-link to="#" exact>Nouveautés</router-link>
                        </li>
                        <li :class="{ 'text-[#39d2c0] ': $route.path === '#' }" class="hover:text-[#39d2c0] ">
                            <router-link to="#" exact>A propos</router-link>
                        </li>

                        <li :class="{ 'text-[#39d2c0] ': $route.path === '/login' }" class="hover:text-[#39d2c0]  ">
                        <router-link to="/login" exact>Connexion</router-link>
                    </li>

                    <li 
                        class="uppercase text-sm text-white flex justify-center items-center    ">
                        <router-link :class="{ 'bg-[#39d2c0]': $route.path === '/SignUp' }" class="bg-[#4b39ef] hover:bg-[#39d2c0] pt-[.4rem] rounded-full py-1 px-3" to="/SignUp" exact>Inscription</router-link>
                    </li>

                    </ul>
                </nav>
            </div>
            <div class="hidden lg:flex">
                <ul class="flex items-center justify-center gap-4 font-semibold cursor-pointer">
                    <li :class="{ 'text-[#39d2c0] border-b border-b-green-300': $route.path === '/login' }" class="hover:text-[#39d2c0]  hover:border-b hover:border-b-green-300">
                        <router-link to="/login" exact>Connexion</router-link>
                    </li>

                    <li :class="{ 'bg-[#39d2c0]': $route.path === '/SignUp' }"
                        class="uppercase text-sm text-white bg-[#4b39ef] flex justify-center items-center py-1 px-3 pt-[.4rem]  rounded-full hover:bg-[#39d2c0]">
                        <router-link to="/SignUp" exact>Inscription</router-link>
                    </li>
                </ul>
            </div>
            <div class="lg:hidden">
                <Icons name="menubtn" @click="showMenu" v-if="showClosebtn == false" />
                <Icons name="closebtn" @click="closeMenu" v-if="showMenubtn == false" />
            </div>
        </div>
    </div>
</template>
