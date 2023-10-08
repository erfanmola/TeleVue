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
    <div :class="[ 'tele-vue-component-radiobutton', disabled ? 'disabled' : '', (props.platform || platform), (props.colorScheme || colorScheme), (props.theme || theme) ]">
        <label>
            <input :disabled="disabled" type="checkbox" @change="onChangeCallback" :checked="checked" />
            <span class="checkmark"></span>
        </label>
    </div>
</template>

<style lang="scss">

    .tele-vue-component-radiobutton {
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        cursor: pointer;

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
                height: 100%;
                width: 100%;
                background: transparent;
                border: 2px solid var(--tg-theme-hint-color);
                border-radius: 50%;
            }

            > input:checked ~ .checkmark {
                border: 2px solid var(--tg-theme-button-color);
                background: radial-gradient(circle, var(--tg-theme-button-color) 50%, transparent 51%);
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