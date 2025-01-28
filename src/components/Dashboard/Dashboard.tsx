import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { WidgetFactory } from '../../services/WidgetFactory';
import './Dashboard.css';

export interface DashboardProps {
  initialWidgets?: WidgetInstance[];
  widgetFactory: WidgetFactory;
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
      <div className="storybook-dashboard-container">
        {/* If we have widgets, we render them, otherwise we show a placeholder with guidance. */}
        {widgets.length === 0 && (
          <p className="storybook-dashboard-placeholder">
            Start adding widgets to your dashboard by clicking the "Add Widget" button below.
          </p>
        )}
        {widgets.map(widget => 
          widgetFactory.createWidget(
            widget.id, 
            widget.type,
            removeWidget
          )
        )}
      </div>

      <div className="storybook-dashboard-add-widget-button-container">
        <Button primary label="Add Widget" onClick={() => setIsModalOpen(true)} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Add Widget</h2>
        {widgetFactory.getWidgetTypes().map(({ type, label, description }) => (
          <div key={type} style={{ marginBottom: '1rem' }}>
            <Button 
              label={label}
              onClick={() => addWidget(type)}
              title={description}  // Shows description on hover
            />
          </div>
        ))}
      </Modal>
    </>
  );
};