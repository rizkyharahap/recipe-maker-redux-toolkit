import { useCallback } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import type { AppDispatch, AppStore, RootState } from "./store";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useEnterCallback = (
  cb: (e: React.KeyboardEvent<HTMLInputElement>) => void,
  deps: React.DependencyList
) =>
  useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") return cb(e);
    },
    [cb, ...deps]
  );
