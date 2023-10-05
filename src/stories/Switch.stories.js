import Switch from '../components/Switch.vue';

export default {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],
    argTypes: {
        platform: {
            options: [ "android", "android_x", "ios", "macos", "tdesktop", "weba", "webk", "unigram", "unknown" ],
            control: { type: 'select' },
        },
        colorScheme: {
            options: ['light', 'dark'],
            control: { type: 'radio' },
        },
        theme: {
            options: ['material', 'apple'],
            control: { type: 'radio' },
        },
    },
}

export const normal = {};

export const checked = {
    args: {
        checked: true,
    }
}

export const disabled = {
    args: {
        disabled: true,
    }
}

export const checked_disabled = {
    args: {
        checked: true,
        disabled: true,
    }
}