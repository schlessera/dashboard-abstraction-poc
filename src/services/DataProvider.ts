export interface DataProvider {
  getMostPopularContent(): Promise<PopularContent[]>;
  getSearchTraffic(): Promise<SearchTrafficData>;
}

export interface PopularContent {
  id: string;
  title: string;
  views: number;
}

export interface SearchTrafficData {
  daily: number;
  weekly: number;
  trend: 'up' | 'down';
  percentage: number;
}

export class MockDataProvider implements DataProvider {
  async getMostPopularContent(): Promise<PopularContent[]> {
    return [
      { id: '1', title: 'Getting Started Guide', views: 1200 },
      { id: '2', title: 'Advanced Tutorial', views: 850 },
      { id: '3', title: 'API Reference', views: 750 },
    ];
  }

  async getSearchTraffic(): Promise<SearchTrafficData> {
    return {
      daily: 1500,
      weekly: 10500,
      trend: 'up',
      percentage: 12.5
    };
  }
}