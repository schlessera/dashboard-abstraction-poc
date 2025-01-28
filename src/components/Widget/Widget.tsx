import React from 'react';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import './Widget.css';

export interface WidgetProps {
  id: string;
  title: string;
  onRemove?: (id: string) => void;
  className?: string;
}

export const Widget: React.FC<WidgetProps & { children: React.ReactNode }> = ({ 
  id,
  title, 
  children,
  onRemove,
  className 
}) => {
  return (
    <Card 
      title={title}
      className={`storybook-widget ${className || ''}`}
    >
      <div className="storybook-widget-content">
        {children}
      </div>
      {onRemove && (
        <div className="storybook-widget-button-container">
          <Button 
            size="small" 
            label="Remove" 
            onClick={() => onRemove(id)} 
          />
        </div>
      )}
    </Card>
  );
};