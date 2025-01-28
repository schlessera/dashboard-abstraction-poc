import { DataProvider } from './DataProvider';
import { MostPopularContent } from '../components/Widget/MostPopularContent';
import { SearchTraffic } from '../components/Widget/SearchTraffic';
import { DoggoWidget } from '../components/Widget/DoggoWidget';
import React from 'react';
import { TableWidget } from '../components/Widget/TableWidget';

interface WidgetInstance {
  id: string;
  type: 'popular-content' | 'search-traffic' | 'doggo' | 'table';
}
export interface WidgetTypeInfo {
  type: WidgetInstance['type'];
  label: string;
  description?: string;
}

export interface IWidgetFactory {
  createWidget(widgetId: string, type: WidgetInstance['type'], onRemove?: (id: string) => void): React.ReactElement;
  getWidgetTypes(): WidgetTypeInfo[];
}

export class WidgetFactory implements IWidgetFactory {
  private static readonly widgetTypes: WidgetTypeInfo[] = [
    {
      type: 'popular-content',
      label: 'Most Popular Content',
      description: 'Shows the most viewed content'
    },
    {
      type: 'search-traffic',
      label: 'Search Traffic',
      description: 'Displays search analytics'
    },
    {
      type: 'doggo',
      label: 'Random Dog',
      description: 'Shows a random dog image'
    },
    {
      type: 'table',
      label: 'Data Table',
      description: 'Displays random tabular data'
    }
  ];

  private static readonly TABLE_FILE_COUNT = 20;

  constructor(private dataProvider: DataProvider) {}

  getWidgetTypes(): WidgetTypeInfo[] {
    return WidgetFactory.widgetTypes;
  }

  private getRandomTableFile(): string {
    const fileNumber = Math.floor(Math.random() * WidgetFactory.TABLE_FILE_COUNT) + 1;
    return `table-data-${fileNumber}.json`;
  }

  createWidget(widgetId: string, type: WidgetInstance['type'], onRemove?: (id: string) => void): React.ReactElement {
    switch (type) {
      case 'popular-content':
        return <MostPopularContent 
          key={widgetId} 
          id={widgetId} 
          dataProvider={this.dataProvider}
          onRemove={onRemove}
        />;
      case 'search-traffic':
        return <SearchTraffic 
          key={widgetId} 
          id={widgetId} 
          dataProvider={this.dataProvider}
          onRemove={onRemove}
        />;
      case 'doggo':
        return <DoggoWidget
          key={widgetId}
          id={widgetId}
          onRemove={onRemove}
        />;
      case 'table':
        return <TableWidget
          key={widgetId}
          id={widgetId}
          onRemove={onRemove}
          filename={this.getRandomTableFile()}
        />;
      default:
        throw new Error(`Unknown widget type: ${type}`);
    }
  }
} 