import type { Meta, StoryObj } from '@storybook/react';
import '@storybook/react';

import { Typography } from './Typography.js';

export default {
  title: 'UI / Typography',
  component: Typography,
  args: {
    children: 'Hello World',
  },
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof Typography>;

export const Default: Story = {};
