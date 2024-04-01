import React, { useRef } from "react";

import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import { ImageUploader } from "@/components/molecules/ImageUploader";
import { addImage, removeImage, updateName } from "@/lib/features/recipeSlice";
import { useAppDispatch, useAppSelector, useEnterCallback } from "@/lib/hooks";

const MainSection = () => {
  const dispatch = useAppDispatch();
  const recipe = useAppSelector((state) => state.recipe);

  const ref = useRef<HTMLInputElement | null>(null);

  const onChangeImage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(addImage(e.target.files[0]));
    }
  };

  const onEnterImage = useEnterCallback(() => {
    ref.current?.focus();
  }, []);

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="recipe-name">Nama Resep</Label>
        <Input
          id="recipe-name"
          type="text"
          placeholder="Masukan nama resep kamu"
          value={recipe.name}
          onChange={(e) => dispatch(updateName(e.target.value))}
          onKeyDown={onEnterImage}
        />
      </div>

      <div className="col-span-full">
        <Label htmlFor="recipe-image">Gambar Resep</Label>
        <ImageUploader
          onChange={onChangeImage}
          file={recipe.image}
          ref={ref}
          onRemoveFile={() => dispatch(removeImage())}
        />
      </div>
    </>
  );
};

export default MainSection;
