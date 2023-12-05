export const getUnicArray = (arr: [] | RegExpMatchArray) => {
  return [...new Set(arr)];
};
