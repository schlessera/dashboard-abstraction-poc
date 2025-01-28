export interface RequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface RemoteDataProviderProps {
  endpoint: string;
  config?: RequestConfig;
  type?: 'json' | 'image';
}

export class RemoteDataProvider {
  constructor(private props: RemoteDataProviderProps) {}

  async fetch<T>(): Promise<T> {
    const { endpoint, config, type } = this.props;
    
    // Handle both absolute and relative URLs
    const url = endpoint.startsWith('http') 
      ? new URL(endpoint)
      : new URL(endpoint, window.location.origin);

    if (config?.params) {
      Object.entries(config.params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
      });
    }

    // For image endpoints, return the URL directly
    if (type === 'image') {
      return url.toString() as T;
    }

    const response = await fetch(url.toString(), {
      headers: config?.headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
} 