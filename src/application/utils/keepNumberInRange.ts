export const keepNumberInRange = (number: number, max: number, min: number) => {
  if (number >= max) return max;
  if (number <= min) return min;
  return number;
};
