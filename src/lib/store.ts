import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { ingredientSlice } from "./features/ingredientSlice";
import { recipeSlice } from "./features/recipeSlice";

const rootReducer = combineSlices(ingredientSlice, recipeSlice);

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
