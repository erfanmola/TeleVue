<script setup>
    import Section from '../components/Section.vue';
    import List from '../components/List.vue';
    import Checkbox from '../components/Checkbox.vue';
    import Switch from '../components/Switch.vue';

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
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    });
</script>

<template>
    <div>
        <Section v-bind="props" >
            <List>
                <li>Item 1<Switch :checked="true" /></li>
                <li>Item 2<Switch :checked="true" /></li>
                <li>Item 3<Switch :checked="true" /></li>
            </List>
        </Section>
    </div>
</template>

<style lang="scss" scoped>
    div {
        background-color: var(--tg-theme-secondary-bg-color);
    }

    li {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: space-between;
    }
</style>