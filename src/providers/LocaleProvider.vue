<script setup>
    import WebApp from '@twa-dev/sdk'
    import { provide } from 'vue';

    const props = defineProps({
        locale: {
            default: WebApp.initDataUnsafe.user?.language_code?.toString().toLowerCase() || 'en',
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

    const direction = rtlLocales.includes(props.locale) ? 'rtl' : 'ltr';

    document.body.classList.add(direction);

    provide('locale', props.locale);
    provide('direction', props.direction || direction);
</script>

<template>
    <div :class="[
        `tele-vue-direction-${ direction }`,
        `tele-vue-locale-${ locale }`
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