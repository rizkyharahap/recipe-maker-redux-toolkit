import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Ingredient } from "./ingredientSlice";

export interface RecipeIngredient extends Ingredient {
  amount?: number;
}

export interface RecipeSliceState {
  name: string;
  ingredients: RecipeIngredient[];
  steps: string[];
  image: File | null;
  editableIngridientIdx: number;
  editableStepIdx: number;
}

const initialState: RecipeSliceState = {
  name: "",
  ingredients: [],
  steps: [],
  image: null,
  editableIngridientIdx: -1,
  editableStepIdx: -1,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,

  reducers: (create) => ({
    updateName: create.reducer((state, action: PayloadAction<string>) => {
      state.name = action.payload;
    }),

    addIngredient: create.reducer(
      (state, action: PayloadAction<RecipeIngredient>) => {
        state.editableIngridientIdx = state.ingredients.length;
        state.ingredients.push(action.payload);
      }
    ),

    updateIngredient: create.reducer(
      (state, action: PayloadAction<{ idx: number; amount: number }>) => {
        state.ingredients[action.payload.idx].amount = action.payload.amount;
      }
    ),

    setEditableIngredient: create.reducer(
      (state, action: PayloadAction<number | undefined>) => {
        state.editableIngridientIdx = action?.payload ?? -1;
      }
    ),

    removeIngredient: create.reducer((state, action: PayloadAction<number>) => {
      state.ingredients.splice(action.payload, 1);
    }),

    upsertStep: create.reducer((state, action: PayloadAction<string>) => {
      if (state.editableStepIdx < 0) {
        state.steps.push(action.payload);
      } else {
        state.steps[state.editableStepIdx] = action.payload;
        state.editableStepIdx = -1;
      }
    }),

    setEditableStep: create.reducer(
      (state, action: PayloadAction<number | undefined>) => {
        state.editableStepIdx = action?.payload ?? -1;
      }
    ),

    removeStep: create.reducer((state, action: PayloadAction<number>) => {
      state.steps.splice(action.payload, 1);
    }),

    addImage: create.reducer((state, action: PayloadAction<File>) => {
      state.image = action.payload;
    }),

    removeImage: create.reducer((state) => {
      state.image = null;
    }),
  }),
});

export const {
  addIngredient,
  upsertStep,
  removeIngredient,
  updateIngredient,
  updateName,
  addImage,
  setEditableIngredient,
  removeImage,
  removeStep,
  setEditableStep,
} = recipeSlice.actions;
