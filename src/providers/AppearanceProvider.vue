<script setup>
    import WebApp from '@twa-dev/sdk';
    import { provide } from 'vue';

    const props = defineProps({
        provideFonts: {
            default: true,
            type: Boolean,
        },
        platform: {
            default: WebApp.platform?.toString().toLowerCase(),
            type: String,
        },
        colorScheme: {
            default: WebApp.colorScheme?.toString().toLowerCase(),
            type: String,
        },
        theme: {
            default: null,
            type: String,
        }
    });

    const theme = (props.platform === 'ios' || props.platform === 'macos') ? 'apple' : 'material';

    provide('platform', props.platform);
    provide('colorScheme', props.colorScheme);
    provide('theme', props.theme || theme);
</script>

<template>
    <div id="tele-vue-appearance-provider" :class="[ `tele-vue-platform-${ platform }`, `tele-vue-theme-${ theme }`, `tele-vue-colorScheme-${ colorScheme }` ]">
        <slot />
    </div>

    <!-- Teleport the font stylesheet to the <head> of the document -->
    <teleport to="head" v-if="provideFonts">
        <!-- Load SF Pro Display font on iOS & MacOS -->
        <link v-if="(props.theme || theme) === 'apple'" href="https://fonts.cdnfonts.com/css/sf-pro-display?styles=98774,98770" rel="stylesheet">
        <!-- Load Roboto font on any other platform -->
        <link v-else href="https://fonts.cdnfonts.com/css/roboto?styles=14394,14400" rel="stylesheet">
    </teleport>
</template>

<style lang="scss">

    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        outline: none;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        -webkit-tap-highlight-color: transparent;
    }

    html, body {
        max-width: 100%;
        overflow-x: hidden;
    }

    #tele-vue-appearance-provider {
        -webkit-font-smoothing: antialiased;
        margin: 0;
    }

    .tele-vue-theme-material {
        font-family: 'Roboto', sans-serif;
        font-display: swap;

        &.tele-vue-colorScheme-light {
            --tele-vue-separator-color: #d9d9d9;
            --tele-vue-main-button-disabled-color: #e9e8e8;
            --tele-vue-button-confirm-color: #31b545;
            --tele-vue-quaternary-fill-background: rgba(122, 122, 122, 0.18);
            --tele-vue-danger-button-color: #CC2929;
            --tele-vue-danger-button-text-color: #FFFFFF;
        }

        &.tele-vue-colorScheme-dark {
            --tele-vue-separator-color: #000000;
            --tele-vue-main-button-disabled-color: #3c3c3e;
            --tele-vue-button-confirm-color: #31b545;
            --tele-vue-quaternary-fill-background: rgba(122, 122, 122, 0.08);
            --tele-vue-danger-button-color: #EE686F;
            --tele-vue-danger-button-text-color: #FFFFFF;
        }

        .apple-only {
            display: none;
        }

        .material-only {
            display: initial;
        }
    }

    .tele-vue-theme-apple {
        font-family: 'SF Pro Display', sans-serif;
        font-display: swap;

        &.tele-vue-colorScheme-light {
            --tele-vue-separator-color: #c8c7cb;
            --tele-vue-main-button-disabled-color: #e8e8e9;
            --tele-vue-button-confirm-color: #34c759;
            --tele-vue-quaternary-fill-background: rgba(116, 116, 128, 0.08);
            --tele-vue-danger-button-color: #FF3B30;
            --tele-vue-danger-button-text-color: #FFFFFF;
        }

        &.tele-vue-colorScheme-dark {
            --tele-vue-separator-color: #3d3d3f;
            --tele-vue-main-button-disabled-color: #2f2f2f;
            --tele-vue-button-confirm-color: #30d158;
            --tele-vue-quaternary-fill-background: rgba(116, 116, 128, 0.12);
            --tele-vue-danger-button-color: #FF453A;
            --tele-vue-danger-button-text-color: #FFFFFF;
        }

        .apple-only {
            display: initial;
        }

        .material-only {
            display: none;
        }
    }

</style>