import { type PayloadAction, createSlice } from "@reduxjs/toolkit";
import { type Ingredient } from "./ingredientSlice";

export interface RecipeIngredient extends Ingredient {
  amount: number;
}

export interface SelectedAction {
  type: "ingredient" | "step";
  index: number;
  isEdit?: boolean;
}

export interface RecipeSliceState {
  name: string;
  ingredients: RecipeIngredient[];
  steps: string[];
  image: File | null;
  selectedAction: SelectedAction;
}

const initialState: RecipeSliceState = {
  name: "",
  ingredients: [],
  steps: [],
  image: null,
  selectedAction: {
    type: "ingredient",
    index: -1,
    isEdit: false,
  },
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
        state.ingredients.push(action.payload);

        // make editable selected action
        state.selectedAction.isEdit = true;
        state.selectedAction.index = state.ingredients.length - 1;
        state.selectedAction.type = "ingredient";
      }
    ),

    updateIngredient: create.reducer(
      (state, action: PayloadAction<{ index: number; amount: number }>) => {
        state.ingredients[action.payload.index].amount = action.payload.amount;
      }
    ),

    removeIngredient: create.reducer((state, action: PayloadAction<number>) => {
      state.ingredients.splice(action.payload, 1);
    }),

    upsertStep: create.reducer((state, action: PayloadAction<string>) => {
      if (!state.selectedAction?.isEdit) {
        state.steps.push(action.payload);
      } else {
        state.steps[state.selectedAction.index] = action.payload;

        // reset selection action
        state.selectedAction.index = -1;
        state.selectedAction.isEdit = false;
      }
    }),

    removeStep: create.reducer((state, action: PayloadAction<number>) => {
      state.steps.splice(action.payload, 1);
    }),

    addImage: create.reducer((state, action: PayloadAction<File>) => {
      state.image = action.payload;
    }),

    removeImage: create.reducer((state) => {
      state.image = null;
    }),

    setSelectedAction: create.reducer(
      (state, action: PayloadAction<SelectedAction>) => {
        state.selectedAction = action.payload;
      }
    ),
  }),
});

export const {
  addIngredient,
  removeIngredient,
  updateIngredient,
  upsertStep,
  removeStep,
  updateName,
  addImage,
  removeImage,
  setSelectedAction,
} = recipeSlice.actions;
