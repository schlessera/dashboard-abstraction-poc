export class CacheService {
  private static cache: Map<string, { data: any; timestamp: number }> = new Map();
  private static DEFAULT_TTL = 5 * 60 * 1000; // 5 minutes in milliseconds

  static set(key: string, data: any, ttl: number = CacheService.DEFAULT_TTL): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now() + ttl
    });
  }

  static get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;

    if (Date.now() > entry.timestamp) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  static clear(): void {
    this.cache.clear();
  }
} 