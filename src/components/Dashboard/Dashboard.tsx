import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';
import { WidgetFactory, WidgetInstance } from '../../services/WidgetFactory';
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
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th style={{ fontWeight: 'normal', textAlign: 'left', padding: '0.5rem' }}>Name</th>
              <th style={{ fontWeight: 'normal', textAlign: 'left', padding: '0.5rem' }}>Description</th>
              <th style={{ fontWeight: 'normal', textAlign: 'left', padding: '0.5rem' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {widgetFactory.getWidgetTypes().map(({ type, label, description }) => (
              <tr key={type} style={{ borderBottom: '1px solid #e0e0e0' }}>
                <td style={{ fontWeight: 'bold', padding: '0.5rem' }}>{label}</td>
                <td style={{ padding: '0.5rem' }}>{description}</td>
                <td style={{ padding: '0.5rem' }}>
                  <Button
                    primary
                    size="small"
                    label="Add"
                    onClick={() => addWidget(type)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal>
    </>
  );
};