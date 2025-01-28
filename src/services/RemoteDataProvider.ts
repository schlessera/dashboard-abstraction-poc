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
    
    // Construct URL with query parameters if they exist
    const url = new URL(endpoint);
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