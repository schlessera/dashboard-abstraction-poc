import React, { useEffect, useState } from 'react';
import { DataDrivenWidget } from './DataDrivenWidget';
import { PopularContent, DataProvider } from '../../services/DataProvider';

interface MostPopularContentProps {
  dataProvider: DataProvider;
}

export const MostPopularContent: React.FC<MostPopularContentProps> = ({ 
  dataProvider,
  ...widgetProps 
}) => {
  const [content, setContent] = useState<PopularContent[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await dataProvider.getMostPopularContent();
      setContent(data);
    };
    fetchData();
  }, [dataProvider]);

  return (
    <DataDrivenWidget 
      {...widgetProps}
      dataProvider={dataProvider}
      title="Most Popular Content"
    >
      <ul>
        {content.map(item => (
          <li key={item.id}>
            {item.title} - {item.views} views
          </li>
        ))}
      </ul>
    </DataDrivenWidget>
  );
};