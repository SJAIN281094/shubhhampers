"use client";

import { useSyncExternalStore } from "react";

/**
 * Custom hook to prevent hydration mismatches in Next.js
 * Returns true only after the component has mounted on the client
 * Uses useSyncExternalStore to avoid setState in useEffect warnings
 */
function subscribe() {
  return () => {};
}

function getSnapshot() {
  return typeof window !== "undefined";
}

function getServerSnapshot() {
  return false;
}

export function useIsMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
