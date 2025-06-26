import { Api } from './generated/api';
import type { AxiosRequestConfig } from 'axios';

export interface ApiClientConfig {
  baseURL: string;
  timeout?: number;
  headers?: Record<string, string>;
  interceptors?: {
    request?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    response?: {
      onSuccess?: (response: any) => any;
      onError?: (error: any) => Promise<any>;
    };
  };
}

export function createApiClient(config: ApiClientConfig) {
  const api = new Api({
    baseURL: config.baseURL,
    timeout: config.timeout || 30000,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers,
    },
  });

  // Add request interceptor
  if (config.interceptors?.request) {
    api.instance.interceptors.request.use(config.interceptors.request);
  }

  // Add response interceptors
  if (config.interceptors?.response) {
    api.instance.interceptors.response.use(
      config.interceptors.response.onSuccess,
      config.interceptors.response.onError
    );
  }

  return api;
}