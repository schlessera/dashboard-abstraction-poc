import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../../components/Card/Card';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    className: { control: 'text' },
  },
  args: {
    title: 'Sample Card',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: (
        <p>Card content goes here</p>
    ),
  },
};

export const WithContent: Story = {
  args: {
    title: 'Content Card',
    children: (
      <div>
        <h4>Detailed Information</h4>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    ),
  },
}; 