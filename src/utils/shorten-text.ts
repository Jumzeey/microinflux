/**
 * Shortens a given text to the specified length and appends "..." if truncated.
 * @param text - The text to be shortened.
 * @param maxLength - The maximum length of the text.
 * @returns The shortened text.
 */
export const shortenText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) {
    return text;
  }

  return text.substring(0, maxLength - 3) + '...';
};
