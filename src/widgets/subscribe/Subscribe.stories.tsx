import type { Meta, StoryObj } from '@storybook/react';

import { Subscribe } from './Subscribe';

const meta: Meta<typeof Subscribe> = {
  component: Subscribe,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Subscribe>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
};
