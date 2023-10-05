import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { ref, watch, getCurrentInstance } from 'vue';
import AppearanceProvider from '../src/providers/AppearanceProvider.vue';
import '../src/stories/variables.css';

/** @type { import('@storybook/vue3').Preview } */
const parameters = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Services",
          "Providers",
          "Components",
        ],
      },
    },
    backgrounds: {
      disable: true,
      grid: {
        disable: true,
      },
    },
    viewport: {
      viewports: MINIMAL_VIEWPORTS,
      defaultViewport: "mobile1",
    },
  },
};

export default parameters;

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme from AppearanceProvider",
    defaultValue: "material",
    toolbar: {
      icon: "mobile",
      items: ["apple", "material"],
      title: true,
      dynamicTitle: true,
    },
  },
  colorScheme: {
    name: "colorScheme",
    description: "Global colorScheme from AppearanceProvider",
    defaultValue: "light",
    toolbar: {
      icon: "lightning",
      items: ["light", "dark"],
      title: true,
      dynamicTitle: true,
    },
  },
};

const withThemeProvider = (Story, context) => {
  
  const theme       = ref(context.globals.theme);
  const colorScheme = ref(context.globals.colorScheme);

  watch(
    () => context.globals.theme,
    () => {
      setTimeout(() => { getCurrentInstance()?.proxy?.$forceUpdate(); });
    },
    { immediate: true }
  );

  return {
    components: { Story, AppearanceProvider },

    setup: () => ({ theme, colorScheme }),

    template: `
      <AppearanceProvider :theme="theme" :colorScheme="colorScheme">
        <story />
      </AppearanceProvider>
    `
  }

};

export const decorators = [withThemeProvider];