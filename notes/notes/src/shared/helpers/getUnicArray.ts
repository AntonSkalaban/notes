export const getUnicArray = (arr: string[] | RegExpMatchArray) => {
  return [...new Set(arr)];
};
