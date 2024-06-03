import type { Meta, StoryObj } from '@storybook/react';

import { CategoriesList } from './CategoriesList';

const meta: Meta<typeof CategoriesList> = {
  component: CategoriesList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoriesList>;

export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: '',
    },
  },
  args: {},
};
