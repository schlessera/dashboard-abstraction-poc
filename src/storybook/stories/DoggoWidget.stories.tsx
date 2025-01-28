import type { Meta, StoryObj } from '@storybook/react';
import { DoggoWidget } from '../../components/Widget/DoggoWidget';

const meta = {
  title: 'Widgets/DoggoWidget',
  component: DoggoWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
  },
} satisfies Meta<typeof DoggoWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'doggo-1',
    title: 'Random Doggo',
    width: 300,
    height: 200,
  },
};

export const CustomSize: Story = {
  args: {
    id: 'doggo-2',
    title: 'Big Doggo',
    width: 500,
    height: 300,
  },
};

export const WithRemoveButton: Story = {
  args: {
    id: 'doggo-3',
    title: 'Removable Doggo',
    onRemove: (id) => console.log(`Removing doggo widget ${id}`),
  },
};