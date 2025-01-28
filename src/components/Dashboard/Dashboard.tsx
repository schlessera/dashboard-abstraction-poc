import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal } from '../Modal/Modal';
import { WidgetFactory } from '../../services/WidgetFactory';
import './Dashboard.css';

const DashboardContainer = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const AddWidgetButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  border-radius: 20px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    background: #0056b3;
  }
`;

interface DashboardProps {
  initialWidgets?: WidgetInstance[];
  widgetFactory: WidgetFactory;
}

interface WidgetInstance {
  id: string;
  type: 'popular-content' | 'search-traffic';
}

export const Dashboard: React.FC<DashboardProps> = ({
  widgetFactory,
  initialWidgets = []
}) => {
  const [widgets, setWidgets] = useState<WidgetInstance[]>(initialWidgets);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addWidget = (type: WidgetInstance['type']) => {
    const newWidget: WidgetInstance = {
      id: `widget-${Date.now()}`,
      type,
    };
    setWidgets([...widgets, newWidget]);
    setIsModalOpen(false);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter(widget => widget.id !== id));
  };

  return (
    <>
      <DashboardContainer>
        {/* If we have widgets, we render them, otherwise we show a placeholder with guidance. */}
        {widgets.length === 0 && (
          <p className="storybook-dashboard-placeholder">Start adding widgets to your dashboard by clicking the "Add Widget" button below.</p>
        )}
        {widgets.map(widget => 
          widgetFactory.createWidget(
            widget.id, 
            widget.type,
            removeWidget
          )
        )}
      </DashboardContainer>

      <AddWidgetButton onClick={() => setIsModalOpen(true)}>
        Add Widget
      </AddWidgetButton>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Add Widget</h2>
        <button onClick={() => addWidget('popular-content')}>
          Most Popular Content
        </button>
        <button onClick={() => addWidget('search-traffic')}>
          Search Traffic
        </button>
      </Modal>
    </>
  );
};