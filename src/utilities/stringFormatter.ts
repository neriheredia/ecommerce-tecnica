export const toUpperCaseString = (str: string) => {
  if (typeof str !== 'string') return '';

  const formatted = str.toUpperCase();

  return formatted;
};

export const toCapitalize = (str: string) => {
  const firstLetter = str.slice(0, 1).toUpperCase();

  return `${firstLetter}${str.slice(1)}`;
};
