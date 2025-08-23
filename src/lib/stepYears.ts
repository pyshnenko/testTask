export default new Map<number, {first: number, second: number}>([
    [1, {first: 1940, second: 1955}],
    [2, {first: 1956, second: 1970}],
    [3, {first: 1971, second: 1985}],
    [4, {first: 1986, second: 2000}],
    [5, {first: 2001, second: 2015}],
    [6, {first: 2016, second: 2020}]
]); //временные диапазоны для слайдера

/** 
    @description: Функция возвращает диапазоны лет для слайдера.
    @returns: Map<number, {first: number, second: number}> - коллекция с диапазонами лет.
    @example: stepYears.get(1) // {first: 1940, second: 1955}
    @note: Используется для управления слайдером в компоненте Slider.
    @totalSteps: number - общее количество шагов в слайдере. 
*/

export const totalSteps = 6;