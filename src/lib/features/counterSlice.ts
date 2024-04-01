import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = {
  value: 0,
};

// If you are not using async thunks you can use the standalone `createSlice`.
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: (create) => ({
    increment: create.reducer((state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    }),
    decrement: create.reducer((state) => {
      state.value -= 1;
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    incrementByAmount: create.reducer(
      (state, action: PayloadAction<number>) => {
        state.value += action.payload;
      }
    ),
    // The function below is called a thunk and allows us to perform async logic. It
    // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
    // will call the thunk with the `dispatch` function as the first argument. Async
    // code can then be executed and other actions can be dispatched. Thunks are
    // typically used to make async requests.
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectCount: (counter) => counter.value,
  },
});

// Action creators are generated for each case reducer function.
export const { decrement, increment, incrementByAmount } = counterSlice.actions;

// Selectors returned by `slice.selectors` take the root state as their first argument.
export const { selectCount } = counterSlice.selectors;
