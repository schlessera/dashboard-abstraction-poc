export interface RequestConfig {
  headers?: Record<string, string>;
  params?: Record<string, string>;
}

export interface RemoteDataProviderProps {
  endpoint: string;
  config?: RequestConfig;
  type?: 'json' | 'image';
}

function getBaseUrl(): string {
  // We need special handling on GitHub Pages, as the base URL is not the same
  // as the origin.
  let baseUrl = window.location.origin;
  if (baseUrl.startsWith('https://schlessera.github.io')) {
    baseUrl = 'https://schlessera.github.io/dashboard-abstraction-poc/';
  }
  return baseUrl;
}

export class RemoteDataProvider {
  constructor(private props: RemoteDataProviderProps) {}

  async fetch<T>(): Promise<T> {
    const { endpoint, config, type } = this.props;
    
    // Handle both absolute and relative URLs
    const url = endpoint.startsWith('http') 
      ? new URL(endpoint)
      : new URL(endpoint, getBaseUrl());

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