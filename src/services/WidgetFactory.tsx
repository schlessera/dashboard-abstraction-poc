import { DataProvider } from './DataProvider';
import { MostPopularContent } from '../components/Widget/MostPopularContent';
import { SearchTraffic } from '../components/Widget/SearchTraffic';
import { WidgetInstance } from '../components/Dashboard/Dashboard';

export interface IWidgetFactory {
  createWidget(widgetId: string, type: WidgetInstance['type'], onRemove?: (id: string) => void): React.ReactElement;
}

export class WidgetFactory implements IWidgetFactory {
  constructor(private dataProvider: DataProvider) {}

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
      default:
        throw new Error(`Unknown widget type: ${type}`);
    }
  }
} 