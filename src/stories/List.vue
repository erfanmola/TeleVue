<script setup>
    import List from '../components/List.vue';
    import Checkbox from '../components/Checkbox.vue';

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
        <li><Checkbox :checked="true" />Item 1</li>
        <li><Checkbox :checked="true" />Item 2</li>
        <li><Checkbox :checked="true" />Item 3</li>
    </List>
</template>

<style lang="scss" scoped>
    li {
        display: flex;
        gap: 1rem;
    }
</style>