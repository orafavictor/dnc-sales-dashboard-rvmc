/**
 * Convert Pixels to Rem
 * @param pixels - Pixels Value to be converted
 * @returns The converted value in Rem
 */

export function pxToRem(pixels: number): string {
  return `${pixels / 16}rem`
}
