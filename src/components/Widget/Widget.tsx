import React from 'react';
import { Card } from '../Card/Card';

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
      className={`widget ${className || ''}`}
    >
      {children}
      {onRemove && (
        <button onClick={() => onRemove(id)} style={{ float: 'right' }}>
          Remove
        </button>
      )}
    </Card>
  );
};