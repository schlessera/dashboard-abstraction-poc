import type { Meta, StoryObj } from '@storybook/react';
import { expect, userEvent, within } from '@storybook/test';

import { Page } from '../../components/Page/Page';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { WidgetFactory } from '../../services/WidgetFactory';
import { MockDataProvider } from '../../services/DataProvider';

const meta = {
  title: 'Components/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Page>;

const mockDataProvider = new MockDataProvider();
const widgetFactory = new WidgetFactory(mockDataProvider);

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedOut: Story = {};

export const LoggedIn: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', { name: /Log in/i });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();

    const logoutButton = canvas.getByRole('button', { name: /Log out/i });
    await expect(logoutButton).toBeInTheDocument();
  },
};

export const WithDashboard: Story = {
  args: {
    widgetFactory: widgetFactory,
  },
  render: (args) => { 
    return (
      <Page>
        <Dashboard widgetFactory={args.widgetFactory} />
      </Page>
    );
  },
};