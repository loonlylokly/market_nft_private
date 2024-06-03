import type { Meta, StoryObj } from '@storybook/react';

import { Discover } from './Discover';

const meta: Meta<typeof Discover> = {
  component: Discover,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Discover>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
};
