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
        title: {
            type: String,
        },
        description: {
            type: String,
        },
    });

    const platform =    inject('platform',    'android');
    const colorScheme = inject('colorScheme', 'light');
    const theme =       inject('theme',       'material');
</script>

<template>
    <div :class="[ 'tele-vue-component-section', (props.platform || platform), (props.colorScheme || colorScheme), (props.theme || theme) ]">
        <section>
            <h3 v-if="title">{{ title }}</h3>
            <div>
                <slot></slot>
            </div>
        </section>
        <p v-if="description">{{ description }}</p>
    </div>
</template>

<style lang="scss">

    .tele-vue-component-section {
        -webkit-tap-highlight-color: transparent;
        display: flex;
        flex-direction: column;

        > section {
            padding: 1rem 0;

            > h3 {
                font-size: 1rem;
                font-weight: normal;
                padding-bottom: 1rem;
            }
            
            > div {
                overflow: hidden;
            }
        }

        > p {
            font-size: 0.925rem;
            font-weight: normal;
            color: var(--tg-theme-hint-color);
            padding: 0.325rem 1rem;
        }

        &.material {
            > section {
                background-color: var(--tg-theme-bg-color);
                margin-bottom: 0.325rem;

                > h3 {
                    padding-inline-start: 1rem;
                    color: var(--tg-theme-link-color);
                }
            }
        }

        &.apple {
            padding: 1rem;

            > section {
                > h3 {
                    padding-inline-start: 1rem;
                    color: var(--tg-theme-hint-color);
                }

                > div {
                    border-radius: 1rem;
                    background-color: var(--tg-theme-bg-color);
                }
            }
        }
    }

</style>