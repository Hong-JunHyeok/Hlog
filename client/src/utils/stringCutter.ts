export const stringCutter = (string: string, endNumber: number) => {
  if (string.length <= endNumber) {
    return string;
  } else {
    return string.slice(0, endNumber) + "...";
  }
};
