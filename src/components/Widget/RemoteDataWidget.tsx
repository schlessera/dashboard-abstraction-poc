import React, { useEffect, useState, useMemo } from 'react';
import { DataDrivenWidget, DataDrivenWidgetProps } from './DataDrivenWidget';
import { RemoteDataProvider } from '../../services/RemoteDataProvider';
import { CacheService } from '../../services/CacheService';

interface RemoteDataWidgetProps extends Omit<DataDrivenWidgetProps, 'dataProvider'> {
  remoteDataProvider: RemoteDataProvider;
  renderData: (data: any) => React.ReactNode;
  adaptTitle?: (data: any) => string;
  cacheKey?: string;
  cacheTTL?: number;
}

export const RemoteDataWidget: React.FC<RemoteDataWidgetProps> = ({
  remoteDataProvider,
  renderData,
  adaptTitle,
  cacheKey,
  cacheTTL,
  ...widgetProps
}) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Memoize the fetch function to prevent unnecessary re-fetches
  const fetchData = useMemo(() => async () => {
    // If we have a cache key, check the cache first
    if (cacheKey) {
      const cachedData = CacheService.get(cacheKey);
      if (cachedData) {
        setData(cachedData);
        setLoading(false);
        return;
      }
    }

    try {
      setLoading(true);
      const result = await remoteDataProvider.fetch();
      
      // Store in cache if we have a cache key
      if (cacheKey) {
        CacheService.set(cacheKey, result, cacheTTL);
      }
      
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'));
    } finally {
      setLoading(false);
    }
  }, [remoteDataProvider, cacheKey, cacheTTL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <DataDrivenWidget
      {...widgetProps}
      dataProvider={remoteDataProvider}
      title={adaptTitle ? adaptTitle(data) : widgetProps.title}
    >
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div style={{ color: 'red' }}>Error: {error.message}</div>
      ) : (
        renderData(data)
      )}
    </DataDrivenWidget>
  );
}; 