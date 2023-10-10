<script setup>
    import WebApp from '@twa-dev/sdk'
    import { provide } from 'vue';

    const props = defineProps({
        locale: {
            default: null,
            type: String,
        },
        direction: {
            default: null,
            type: String,
        }
    });

    const rtlLocales = [
        "ar", // Arabic
        "he", // Hebrew
        "fa", // Persian (Farsi)
        "ur", // Urdu
        "sd", // Sindhi
        "ps", // Pashto
        "yi", // Yiddish
    ];

    const finalLocale    = props.locale || WebApp.initDataUnsafe.user?.language_code?.toString().toLowerCase() || 'en';
    const finalDirection = props.direction || rtlLocales.includes(finalLocale) ? 'rtl' : 'ltr';

    document.body.classList.add(finalDirection);

    provide('locale', finalLocale);
    provide('direction', finalDirection);
</script>

<template>
    <div :class="[
        `tele-vue-direction-${ finalDirection }`,
        `tele-vue-locale-${ finalLocale }`
    ]">
        <slot />
    </div>
</template>

<style lang="scss">

    .tele-vue-direction-rtl {
        direction: rtl;
    }

    .tele-vue-direction-ltr {
        direction: ltr;
    }

</style>