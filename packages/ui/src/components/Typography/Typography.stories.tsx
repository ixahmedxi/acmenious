import type { Meta, StoryObj } from '@storybook/react';

import '@storybook/react';
import { Typography } from './Typography.js';

export default {
  title: 'UI / Typography',
  component: Typography,
  args: {
    children: 'Hello World',
  },
  parameters: {
    theming: {
      themeOverride: 'light',
    },
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Light: Story = {};

export const Dark: Story = {
  parameters: {
    theming: {
      themeOverride: 'dark',
    },
  },
};
