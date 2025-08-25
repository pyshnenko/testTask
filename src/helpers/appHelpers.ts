/**
 * Набор функций помощников для приложения
 * @yarsDatesGenerator - генератор массива годов с описаниями в заданном диапазоне
 * @first - первый год диапазона
 * @second - второй год диапазона
 */

import libDates from "../lib/dates";

export function yearsDatesGenerator(page: number): { year: number; description: string }[] {
  const yearsArray: { year: number; description: string }[] = libDates[page-1]
    .map((event: [number, string]) => {
      return { year: event[0], description: event[1] || "" };
    });
  return yearsArray;
}

/**
 * Форматирует число в строку с ведущим нулём для значений от 0 до 99.
 * 
 * @param num - Число, которое необходимо отформатировать.
 * @returns Строка с ведущим нулём для чисел от 0 до 9, оригинальное число в виде строки для 10–99, 
 *          или `null`, если число выходит за пределы допустимого диапазона (0–99).
 * 
 * @example
 * formatNumber(5);   // Возвращает '05'
 * formatNumber(12);  // Возвращает '12'
 * formatNumber(-1);  // Возвращает null
 * formatNumber(100); // Возвращает null
 */

export function formatNumber(num: number): string | null {
  if (num < 0 || num > 99) {
    return null;
  }

  if (num < 10) {
    return `0${num}`;
  } else {
    return num.toString();
  }
}
