import Section from './Section.vue';

export default {
    title: 'Components/Section',
    component: Section,
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
        title: {
            control: { type: 'text' },
        },
        description: {
            control: { type: 'text' },
        },
    },
}

export const Default = {
    args: {
        title: 'Section Title',
        description: "A brief explanation of the section and it's usage",
    }
};