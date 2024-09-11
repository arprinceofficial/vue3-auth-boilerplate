<script setup>
    const props = defineProps({
        width: {
            type: String,
            default: "100%"
        },
        height: {
            type: String,
            default: "100%"
        }
    });
</script>
<template>
    <div>
        <img src="/img/main-logo.png" alt=""
            :width="width"
            :height="height"
            class="fill-current" />
    </div>
</template>