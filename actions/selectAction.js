import { SELECT_CHANGED } from "./types";

export const selectChanged = selectValue => ({
  type: SELECT_CHANGED,
  selectValue
});
