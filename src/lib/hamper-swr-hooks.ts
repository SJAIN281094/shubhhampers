"use client";

import useSWR from "swr";
import { fetchHampers, transformApiHamperToUI } from "./hamper-api";
import { fetchHampersServerAction } from "./hamper-server-actions";
import { HampersApiParams, ApiHampersResponse, HamperProduct } from "./hamper-api-types";

// Environment flag to determine fetcher behavior
const USE_SERVER_ACTIONS = process.env.NODE_ENV === "production";

/**
 * Universal fetcher that switches based on environment
 */
async function universalHampersFetcher(key: string): Promise<HamperProduct[]> {
  // Parse the key to extract parameters
  const [, paramsJson] = key.split("|");
  const params: HampersApiParams = paramsJson ? JSON.parse(paramsJson) : {};

  let response: ApiHampersResponse;

  if (USE_SERVER_ACTIONS) {
    const result = await fetchHampersServerAction(params);
    if (result.error) {
      throw new Error(result.error);
    }
    response = result.data;
  } else {
    response = await fetchHampers(params);
  }

  // Transform API data to UI format
  return response.data.map(transformApiHamperToUI);
}

/**
 * Hook to fetch hampers with SWR
 */
export function useHampers(params: HampersApiParams = {}) {
  // Create a unique key for SWR based on parameters
  const key = `hampers|${JSON.stringify(params)}`;

  const { data, error, isLoading, mutate } = useSWR(key, universalHampersFetcher, {
    // Cache for 5 minutes
    dedupingInterval: 300000,
    // Revalidate on focus
    revalidateOnFocus: true,
    // Retry on error
    errorRetryCount: 3,
    errorRetryInterval: 1000
  });

  return {
    hampers: data || [],
    isLoading,
    error,
    mutate,
    // Helper to refresh data
    refresh: () => mutate(),
    // Helper to check if there's more data (for pagination)
    hasMore: data ? data.length === (params.pageSize || 25) : false
  };
}

/**
 * Hook to fetch hampers with pagination support
 * @param apiParams - API parameters including category, subCategory, etc.
 * @param initialPage - Initial page number
 * @param pageSize - Number of items per page
 */
export function useHampersPaginated(
  apiParams: Partial<HampersApiParams> = {},
  initialPage: number = 1,
  pageSize: number = 25
) {
  const params: HampersApiParams = {
    page: initialPage,
    pageSize,
    isActive: true,
    ...apiParams
  };

  const result = useHampers(params);

  return {
    ...result,
    // Add pagination helpers
    page: initialPage,
    pageSize,
    apiParams,
    // Helper to load more (for infinite scroll)
    loadMore: async (nextPage: number) => {
      const nextParams = { ...params, page: nextPage };
      const nextKey = `hampers|${JSON.stringify(nextParams)}`;

      try {
        const newData = await universalHampersFetcher(nextKey);
        return newData;
      } catch (error) {
        throw error;
      }
    }
  };
}

/**
 * Legacy hook for backward compatibility
 * @deprecated Use useHampersPaginated with apiParams object instead
 */
export function useHampersPaginatedLegacy(
  category: string = "all",
  initialPage: number = 1,
  pageSize: number = 25
) {
  const apiParams = category !== "all" ? { category } : {};
  return useHampersPaginated(apiParams, initialPage, pageSize);
}

/**
 * Debug hook to check current environment and fetcher mode
 */
export function useHamperDebugInfo() {
  return {
    environment: process.env.NODE_ENV,
    useServerActions: USE_SERVER_ACTIONS,
    timestamp: new Date().toISOString()
  };
}
