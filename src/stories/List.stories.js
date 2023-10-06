import List from './List.vue';

export default {
    title: 'Components/List',
    component: List,
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

export const Default = {};