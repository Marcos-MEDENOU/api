<script setup>
import { ref } from 'vue';

defineProps({
    msg: {
        type: String,
        required: true
    }
})


const showTopImage = ref(false);
</script>

<template>
    <div class="relative w-40 h-10" @mouseover="showTopImage = true" @mouseout="showTopImage = false">
        <img class="absolute w-full h-full transition-opacity duration-500" :class="{ 'hidden': showTopImage }"
            src="../assets/LogoKMObuilder.png" alt="KMObuilder">
        <img class="absolute w-full h-full" :class="{ 'hidden': !showTopImage }" src="../assets/Logohover.png"
            alt="KMObuilder">
    </div>
</template>

