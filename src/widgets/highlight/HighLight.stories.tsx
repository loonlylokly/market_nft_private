import type { Meta, StoryObj } from '@storybook/react';

import { HighLight } from './HighLight';

const meta: Meta<typeof HighLight> = {
  component: HighLight,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HighLight>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
};
