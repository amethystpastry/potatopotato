"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/** True once the component has mounted on the client; false during SSR and hydration. */
export function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
