import type { Meta, StoryObj } from '@storybook/react';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { MockDataProvider } from '../../services/DataProvider';
import { WidgetFactory } from '../../services/WidgetFactory';
const meta = {
  title: 'Components/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        height: '20vh',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

const mockDataProvider = new MockDataProvider();
const widgetFactory = new WidgetFactory(mockDataProvider);

export const DefaultDashboard: Story = {
  args: {
    widgetFactory: widgetFactory,
  },
};

export const PrepopulatedDashboard: Story = {
  args: {
    widgetFactory: widgetFactory,
    initialWidgets: [
      { id: '1', type: 'popular-content' },
      { id: '2', type: 'search-traffic' },
    ],
  },
};