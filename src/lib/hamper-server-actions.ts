"use server";

import { revalidateTag } from "next/cache";
import { ApiHampersResponse, HampersApiParams } from "./hamper-api-types";

const API_BASE_URL = "https://admin.shubhhampers.com/api";

/**
 * Server action to fetch hampers with caching and revalidation
 */
export async function fetchHampersServerAction(
  params: HampersApiParams = {}
): Promise<{ data: ApiHampersResponse; error?: string }> {
  try {
    const queryParams = new URLSearchParams({
      page: (params.page || 1).toString(),
      pageSize: (params.pageSize || 25).toString(),
      populate: "deep"
    });

    // Add category filter if provided
    if (params.category) {
      queryParams.append("category", params.category);
    }

    // Add subCategory filter if provided
    if (params.subCategory) {
      queryParams.append("subCategory", params.subCategory);
    }

    const url = `${API_BASE_URL}/hampers?${queryParams.toString()}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      // Cache for 60 seconds, revalidate in background
      next: {
        revalidate: 60,
        tags: [`hampers-${params.category || "all"}`]
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: ApiHampersResponse = await response.json();

    // Log for server debugging
    console.log(
      `[SERVER] Fetched ${data.data.length} hampers for category: ${params.category || "all"}`
    );

    return { data };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch hampers";

    // Log error for server debugging
    console.error("[SERVER ERROR] Failed to fetch hampers:", {
      error: errorMessage,
      params,
      timestamp: new Date().toISOString()
    });

    return {
      data: { data: [], meta: { pagination: { page: 1, pageSize: 25, pageCount: 0, total: 0 } } },
      error: errorMessage
    };
  }
}

/**
 * Server action to fetch single hamper by ID
 */
export async function fetchHamperByIdServerAction(
  id: string
): Promise<{ data: any; error?: string }> {
  try {
    const url = `${API_BASE_URL}/hampers/${id}?populate=deep`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
      next: {
        revalidate: 300, // 5 minutes
        tags: [`hamper-${id}`]
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    console.log(`[SERVER] Fetched hamper by ID: ${id}`);

    return { data };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch hamper";

    console.error("[SERVER ERROR] Failed to fetch hamper by ID:", {
      error: errorMessage,
      id,
      timestamp: new Date().toISOString()
    });

    return {
      data: null,
      error: errorMessage
    };
  }
}

/**
 * Revalidate hampers cache
 */
export async function revalidateHampersCache(category?: string) {
  "use server";

  try {
    revalidateTag(`hampers-${category || "all"}`);
    console.log(`[SERVER] Revalidated cache for category: ${category || "all"}`);
  } catch (error) {
    console.error("[SERVER ERROR] Failed to revalidate cache:", error);
  }
}
