export const toUpperCaseString = (str: string) => {
  if (typeof str !== 'string') return '';

  const formatted = str.toUpperCase();

  return formatted;
};
