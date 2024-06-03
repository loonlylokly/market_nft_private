import type { Meta, StoryObj } from '@storybook/react';

import { Trends } from './Trends';

const meta: Meta<typeof Trends> = {
  component: Trends,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Trends>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
};
