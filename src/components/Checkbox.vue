<script setup>
    import WebApp from '@twa-dev/sdk'
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
        type: {
            default: 'round',
            type: String,
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
    <div :class="[ 'tele-vue-component-checkbox', type, disabled ? 'disabled' : '', (props.platform || platform), (props.colorScheme || colorScheme), (props.theme || theme) ]">
        <label>
            <input :disabled="disabled" type="checkbox" @change="onChangeCallback" :checked="checked" />
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<style lang="scss">

    .tele-vue-component-checkbox {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        cursor: pointer;

        &.round {
            > label > .checkmark {
                border-radius: 50%;
            }
        }

        &.square {
            > label > .checkmark {
                border-radius: 0.25rem;
            }
        }

        > label {
            display: block;
            position: relative;
            cursor: pointer;
            font-size: 1rem;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            height: 1.325rem;
            width: 1.325rem;

            > input {
                position: absolute;
                opacity: 0;
                cursor: pointer;
            }

            > .checkmark {
                position: absolute;
                top: 0;
                left: 0;
                height: 1.325rem;
                width: 1.325rem;
                background-color: transparent;
                border: 2px solid var(--tg-theme-hint-color);
            }

            > input:checked ~ .checkmark {
                background-color: var(--tg-theme-button-color);
                border-width: 0;
            }

            > .checkmark:after {
                content: "";
                position: absolute;
                display: none;
            }

            > input:checked ~ .checkmark:after {
                display: block;
            }

            > .checkmark:after {
                left: 0.425rem;
                top: 0.215rem;
                width: 0.5rem;
                height: 0.75rem;
                border: solid var(--tg-theme-button-text-color);
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
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