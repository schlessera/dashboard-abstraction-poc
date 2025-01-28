import type { Meta, StoryObj } from '@storybook/react';
import { Widget } from '../../components/Widget/Widget';
import { MockDataProvider } from '../../services/DataProvider';
import { WidgetFactory } from '../../services/WidgetFactory';

const meta = {
  title: 'Components/Widget',
  component: Widget,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onRemove: { action: 'removed' },
  },
  args: {
    id: 'widget-1',
    title: 'Sample Widget',
  },
} satisfies Meta<typeof Widget>;

const mockDataProvider = new MockDataProvider();

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicWidget: Story = {
  args: {
    children: <p>Widget content goes here</p>,
    onRemove: undefined,
  },
};

export const InteractiveWidget: Story = {
  args: {
    title: 'Removable Widget',
    children: <p>Click the remove button to trigger action</p>,
    onRemove: (id) => console.log(`Removing widget ${id}`),
  },
};

export const DataWidget: Story = {
  args: {
    id: 'story-widget',
  },
  render: (args) => {
    const widgetFactory = new WidgetFactory(mockDataProvider);
    return widgetFactory.createWidget(
      args.id, 
      'popular-content',
      (id) => console.log(`Removing widget ${id}`)
    );
  },
}; 