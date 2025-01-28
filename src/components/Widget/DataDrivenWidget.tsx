import React from 'react';
import { Widget, WidgetProps } from './Widget';
import { DataProvider } from '../../services/DataProvider';

export interface DataDrivenWidgetProps extends WidgetProps {
  dataProvider: DataProvider;
}

export const DataDrivenWidget: React.FC<DataDrivenWidgetProps> = ({ 
  dataProvider,
  ...widgetProps 
}) => {
  return (
    <Widget {...widgetProps}>
      {widgetProps.children}
    </Widget>
  );
}; 