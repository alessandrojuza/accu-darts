"use strict";

export const getCheckouts = (score) => {
  if (score == 2) return "D1";
  if (score == 3) return "1 D1";
  if (score == 4) return "D2";
  if (score == 5) return "1 D2";
  if (score == 6) return "D3";
  if (score == 7) return "3 D2";
  if (score == 8) return "D4";
  if (score == 9) return "1 D4";
};
