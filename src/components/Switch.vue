<script setup>
    import WebApp from '@twa-dev/sdk';
    import { inject } from 'vue';

    const props = defineProps({
        checked: {
            default: false,
            type: Boolean,
        },
        disabled: {
            default: false,
            type: Boolean,
        },
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

    const emit = defineEmits([
        'update:checked',
    ]);

    const onChangeCallback = (e) => {

        emit('update:checked', e.target.checked);

        WebApp.HapticFeedback.selectionChanged();

    };
</script>

<template>
    <div :class="[ 'tele-vue-component-switch', disabled ? 'disabled' : '', (props.platform || platform), (props.colorScheme || colorScheme), (props.theme || theme) ]">
        <label>
            <input :disabled="disabled" type="checkbox" @change="onChangeCallback" :checked="checked" />
            <div></div>
        </label>
    </div>
</template>

<style lang="scss">

    .tele-vue-component-switch {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        cursor: pointer;

        > label {

            > input {
                display: none;
            }

            > div {
                position: relative;

                &::after {
                    display: block;
                    position: absolute;
                    content: "";
                    border-radius: 50%;
                }
            }

        }

        &.apple {
            
            > label {

                > div {
                    width: 51px;
                    height: 31px;
                    border-radius: 25.5px;
                    background: var(--tele-vue-main-button-disabled-color);
                    transition: background-color 0.2s ease;

                    &::after {
                        width: 27px;
                        height: 27px;
                        top: 2px;
                        left: 2px;
                        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
                        background: var(--tg-theme-bg-color);
                        transition: transform 0.2s ease;
                    }
                }

                > input:checked ~ div {
                    background: var(--tele-vue-button-confirm-color);

                    &::after {
                        transform: translateX(20px);
                    }
                }

            } 

        }

        &.material {
            
            > label {

                > div {
                    width: 32px;
                    height: 14px;
                    border-radius: 7px;
                    background: var(--tele-vue-separator-color);
                    transition: background-color 0.2s ease;

                    &::after {
                        width: 16px;
                        height: 16px;
                        top: -1px;
                        left: 0;
                        box-shadow: 0 0 0 2px var(--tele-vue-separator-color);
                        background: var(--tg-theme-bg-color);
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }
                }

                > input:checked ~ div {
                    background: var(--tg-theme-button-color);

                    &::after {
                        box-shadow: 0 0 0 2px var(--tg-theme-button-color);
                        transform: translateX(16px);
                    }
                }

            }

        }

        &.disabled {
            pointer-events: none;
            opacity: 0.75;

            > label {
                > input:checked ~ .checkmark {
                    background-color: var(--tg-theme-hint-color);
                }
            }
        }
    }

</style>