import { useCallback } from "react";

import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { unchooseIngredient } from "@/lib/features/ingredientSlice";
import {
  removeIngredient,
  setEditableIngredient,
  updateIngredient,
} from "@/lib/features/recipeSlice";
import { useAppDispatch, useAppSelector, useEnterCallback } from "@/lib/hooks";

const IngredientSection = () => {
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe);

  const onEnterAmount = useEnterCallback((e) => {
    const value = (e.target as HTMLInputElement).value.trim();

    if (value !== "") {
      dispatch(setEditableIngredient(-1));
    }
  }, []);

  const onClickDelete = useCallback((idx: number) => {
    dispatch(removeIngredient(idx));
    dispatch(unchooseIngredient(idx));
  }, []);

  if (recipe.ingredients.length < 1) {
    return (
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
        <div className="text-center">
          <p className="text-sm leading-5 text-muted-foreground">
            Bahan-bahan kamu masih kosong!
            <br />
            Yuk dipilih dari bahan-bahan yang tersedia di sebelah kiri layar.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ul className="space-y-2">
      {recipe.ingredients.map((ingredient, idx) => {
        const isEditable = recipe.editableIngridientIdx === idx;

        return (
          <li key={ingredient.id}>
            <div className="grid grid-cols-12 gap-2 items-center">
              <div>
                {isEditable ? (
                  <Input
                    type="number"
                    value={ingredient.amount}
                    autoFocus
                    onChange={(e) =>
                      dispatch(
                        updateIngredient({
                          idx,
                          amount: parseInt(e.target.value),
                        })
                      )
                    }
                    onKeyDown={onEnterAmount}
                    className="text-center px-1"
                  />
                ) : (
                  <p className="text-sm text-center leading-5 text-foreground">
                    {ingredient.amount}
                  </p>
                )}
              </div>

              <div>
                <p className="text-sm text-center leading-5 text-muted-foreground">
                  {ingredient.uom}
                </p>
              </div>

              <div className="col-span-3">
                <p className="text-sm leading-5 text-muted-foreground">
                  {ingredient.name}
                </p>
              </div>

              <div>
                <Button
                  onClick={() => dispatch(setEditableIngredient(idx))}
                  variant="outline"
                  size="icon"
                  className="rounded-3xl text-indigo-600"
                  disabled={isEditable}
                >
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                    />
                  </svg>
                </Button>
              </div>

              <div>
                <Button
                  onClick={() => onClickDelete(idx)}
                  variant="outline"
                  size="icon"
                  className="rounded-3xl text-indigo-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientSection;
