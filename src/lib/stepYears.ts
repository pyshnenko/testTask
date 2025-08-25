export default new Map<
  number,
  { first: number; second: number; theme: string }
>([
  [1, { first: 1980, second: 1986, theme: "Технологии" }],
  [2, { first: 1987, second: 1991, theme: "Кино" }],
  [3, { first: 1992, second: 1997, theme: "Литература" }],
  [4, { first: 1986, second: 2000, theme: "Театр" }],
  [5, { first: 2006, second: 2014, theme: "Спорт" }],
  [6, { first: 2015, second: 2022, theme: "Наука" }],
]); //временные диапазоны для слайдера

/** 
    @description: Функция возвращает диапазоны лет для слайдера.
    @returns: Map<number, {first: number, second: number}> - коллекция с диапазонами лет.
    @example: stepYears.get(1) // {first: 1940, second: 1955}
    @note: Используется для управления слайдером в компоненте Slider.
    @totalSteps: number - общее количество шагов в слайдере. 
*/

export const totalSteps = 6;
