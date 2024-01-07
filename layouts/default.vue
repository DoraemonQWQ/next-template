<template>
    <div class="h-100vh flex flex-col">
        <!-- header -->
        <div class="flex justify-center items-center bg-blue-500">
            <h1 class="h-50px flex items-center">header</h1>
        </div>
        <!-- main -->
        <div class="flex-grow">
            <slot />
        </div>
        <!-- footer -->
        <div class="flex justify-center items-center bg-red-500">
            <h1 class="h-50px flex items-center">footer</h1>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>