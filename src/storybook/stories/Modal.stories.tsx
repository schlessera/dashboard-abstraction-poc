import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../../components/Modal/Modal';
import { Button } from '../../components/Button/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onClose: { action: 'closed' },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ClosedModal: Story = {
  args: {
    isOpen: false,
    children: (
      <p>Modal content</p>
    ),
  },
};

export const OpenModal: Story = {
  args: {
    isOpen: true,
    children: (
      <div>
        <h2>Sample Modal</h2>
        <p>This is modal content</p>
        <Button label="Click Me" onClick={() => console.log('Action')} />
      </div>
    ),
  },
};

export const InteractiveModal = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button label="Open Modal" onClick={() => setIsOpen(true)} />
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div>
            <h2>Interactive Modal</h2>
            <p>Click outside or press ESC to close</p>
            <Button label="Close" onClick={() => setIsOpen(false)} />
          </div>
        </Modal>
      </>
    );
  },
}; 