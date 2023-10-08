import RadioButton from '../components/RadioButton.vue';

export default {
    title: 'Components/RadioButton',
    component: RadioButton,
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

export const Default_round = {
    args: {
        type: 'round'
    }
};

export const Default_square = {
    args: {
        type: 'square'
    }
};

export const checked_round = {
    args: {
        checked: true,
    }
}

export const checked_square = {
    args: {
        checked: true,
        type: 'square'
    }
}

export const disabled_round = {
    args: {
        disabled: true,
    }
}

export const disabled_square = {
    args: {
        disabled: true,
        type: 'square'
    }
}

export const checked_disabled_round = {
    args: {
        checked: true,
        disabled: true,
    }
}

export const checked_disabled_square = {
    args: {
        checked: true,
        disabled: true,
        type: 'square'
    }
}