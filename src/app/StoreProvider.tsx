"use client";

import { useRef } from "react";
import { Provider } from "react-redux";

import { makeStore, type AppStore } from "@/lib/store";

interface Props {
  readonly children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
