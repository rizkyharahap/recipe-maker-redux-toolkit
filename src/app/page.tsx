"use client";

import { decrement, increment, selectCount } from "@/lib/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

export default function Home() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  return (
    <div>
      <div className="">
        <button
          className=""
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span aria-label="Count" className="">
          {count}
        </span>
        <button
          className=""
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
}
