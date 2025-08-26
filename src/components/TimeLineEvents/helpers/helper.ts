  import { baseMediaWidth } from "../../../consts";

/**
 * Вычисляет количество слайдов, которые должны отображаться на экране одновременно,
 * в зависимости от ширины экрана и общего количества событий.
 *
 * @param pageWidth - Текущая ширина экрана (в пикселях).
 * @param eventsNums - Общее количество событий (слайдов) в массиве.
 * @returns Число, представляющее количество видимых слайдов
 *
 * @example
 * slidersOnDisplay(320, 1); // Возвращает 2 (мобильный экран с 1 событием)
 * slidersOnDisplay(320, 3); // Возвращает 1.5 (мобильный экран с 3 событиями)
 * slidersOnDisplay(1080, 2); // Возвращает 2 (десктоп с 2 событиями)
 * slidersOnDisplay(1080, 5); // Возвращает 3.5 (десктоп с 5 событиями)
 */

export const slidersOnDisplay = (pageWidth: number, eventsNums: number) => {
if (pageWidth < baseMediaWidth && eventsNums === 1) return 2;
else if (pageWidth < baseMediaWidth) return 1.5;
else if (eventsNums < 3.5) return eventsNums;
else return 3.5;
};