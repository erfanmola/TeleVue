<script setup>
    import { inject } from 'vue';

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

    const platform =    inject('platform',    'android');
    const colorScheme = inject('colorScheme', 'light');
    const theme =       inject('theme',       'material');
</script>

<template>
    <ul :class="[ 'tele-vue-component-list', (props.platform || platform), (props.colorScheme || colorScheme), (props.theme || theme) ]">
        <slot></slot>
    </ul>
</template>

<style lang="scss">

    .tele-vue-component-list {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        overflow: hidden;
        
        > * {
            width: 100%;
            padding: 0.75rem 1rem;
            position: relative;

            &:active {
                background-color: var(--tele-vue-quaternary-fill-background);
            }
        }

        > *:not(:last-child) {

            &::before {
                content: '';
                inset: 0;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 0;
                border-bottom: 1px solid var(--tele-vue-separator-color);
                margin-inline-start: 2.5rem;
            }

        }
    }

</style>