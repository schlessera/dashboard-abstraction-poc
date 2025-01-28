import { DataProvider } from './DataProvider';
import { MostPopularContent } from '../components/Widget/MostPopularContent';
import { SearchTraffic } from '../components/Widget/SearchTraffic';
import { DoggoWidget } from '../components/Widget/DoggoWidget';
import React from 'react';

interface WidgetInstance {
  id: string;
  type: 'popular-content' | 'search-traffic' | 'doggo';
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
    }
  ];

  constructor(private dataProvider: DataProvider) {}

  getWidgetTypes(): WidgetTypeInfo[] {
    return WidgetFactory.widgetTypes;
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
      default:
        throw new Error(`Unknown widget type: ${type}`);
    }
  }
} 