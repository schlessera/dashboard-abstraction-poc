import React, { useEffect, useState } from 'react';
import { DataDrivenWidget } from './DataDrivenWidget';
import { SearchTrafficData, DataProvider } from '../../services/DataProvider';

interface SearchTrafficProps {
  dataProvider: DataProvider;
}

export const SearchTraffic: React.FC<SearchTrafficProps> = ({ 
  dataProvider,
  ...widgetProps 
}) => {
  const [data, setData] = useState<SearchTrafficData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const traffic = await dataProvider.getSearchTraffic();
      setData(traffic);
    };
    fetchData();
  }, [dataProvider]);

  if (!data) return null;

  return (
    <DataDrivenWidget
      {...widgetProps}
      dataProvider={dataProvider}
      title="Search Traffic"
    >
      <div>
        <p>Daily Searches: {data.daily}</p>
        <p>Weekly Searches: {data.weekly}</p>
        <p>Trend: {data.trend === 'up' ? '↑' : '↓'} {data.percentage}%</p>
      </div>
    </DataDrivenWidget>
  );
};