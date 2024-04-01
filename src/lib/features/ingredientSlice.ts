import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";

enableMapSet();

export type UOM = "Kg" | "Sdm" | "Sdt";

export interface Ingredient {
  id: number;
  name: string;
  uom: UOM;
}

export interface IngredientSliceState {
  ingredients: Ingredient[];
  choosedIngredientIds: number[];
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: "Daging Sapi",
    uom: "Kg",
  },
  {
    id: 2,
    name: "Tepung Maizena",
    uom: "Kg",
  },
  {
    id: 3,
    name: "Apel",
    uom: "Kg",
  },
  {
    id: 4,
    name: "Garam",
    uom: "Sdt",
  },
  {
    id: 5,
    name: "Tepung Terigu",
    uom: "Kg",
  },
  {
    id: 6,
    name: "Ayam",
    uom: "Kg",
  },
  {
    id: 7,
    name: "Gula",
    uom: "Sdm",
  },
];

const initialState: IngredientSliceState = {
  ingredients,
  choosedIngredientIds: [],
};

export const ingredientSlice = createSlice({
  name: "ingredient",
  initialState,

  reducers: (create) => ({
    chooseIngredient: create.reducer((state, action: PayloadAction<number>) => {
      state.choosedIngredientIds.push(action.payload);
    }),

    unchooseIngredient: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.choosedIngredientIds.splice(action.payload, 1);
      }
    ),
  }),
});

export const { unchooseIngredient, chooseIngredient } = ingredientSlice.actions;
