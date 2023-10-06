<script setup>
    import List from '../components/List.vue';

    const props = defineProps({
        platform: {
            type: String,
        },
        colorScheme: {
            type: String,
        },
        theme: {
            type: String,
        },
    });
</script>

<template>
    <List v-bind="props">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </List>
</template>