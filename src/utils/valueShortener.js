export const valueShortener = num1 => {
  let newStr = '';
  const len = num1.length;
  if (len >= 7) {
    newStr = `${num1.slice(0, 1)},${num1.slice(1, 3)}m`;
  }
  return newStr;
};
