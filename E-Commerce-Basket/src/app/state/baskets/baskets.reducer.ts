import { createAction, createReducer, on } from "@ngrx/store";

const initialState = 0;

export const BasketsReducer = createReducer(
  initialState,
  on(createAction("[Baskets] AddCount"),(state) => state +=1 )
);

