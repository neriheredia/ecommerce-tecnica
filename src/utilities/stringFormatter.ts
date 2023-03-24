export const toUpperCaseString = (str: string) => {
  if (typeof str !== 'string') return '';

  const formatted = str.toUpperCase();

  return formatted;
};

export const toCapitalize = (str: string) => {
  const firstLetter = str.slice(0, 1).toUpperCase();

  return `${firstLetter}${str.slice(1)}`;
};

export const recoverName = (str: string) => str.split(' ', 1).join();

export const recoverColor = (str: string) => {
  const color = str.split(' ');

  return color[1];
};

export const clearStringInNumber = (str: string) => str.replace(/\D/g, '');

export const clearNumberInString = (str: string) => str.replace(/[0-9]/g, '');
