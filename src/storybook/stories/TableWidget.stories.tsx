import type { Meta, StoryObj } from '@storybook/react';
import { TableWidget } from '../../components/Widget/TableWidget';

const meta = {
  title: 'Widgets/TableWidget',
  component: TableWidget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: 'table-1',
    title: 'Team Members',
    filename: `table-data-${Math.floor(Math.random() * 20) + 1}.json`
  },
};

export const WithRemoveButton: Story = {
  args: {
    id: 'table-2',
    title: 'Removable Table',
    filename: `table-data-${Math.floor(Math.random() * 20) + 1}.json`,
    onRemove: (id) => console.log(`Removing table widget ${id}`),
  },
}; 