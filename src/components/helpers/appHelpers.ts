/**
 * Набор функций помощников для приложения
 * @yarsDatesGenerator - генератор массива годов с описаниями в заданном диапазоне
 * @first - первый год диапазона
 * @second - второй год диапазона
 */

import { datesKeys } from "../../lib/dates";
import libDates from "../../lib/dates";

interface YaarsDatesGenetatorProps {first: number, second: number}

export function yearsDatesGenerator(dates: YaarsDatesGenetatorProps): { year: number; description: string }[] {
    const yearsArray: { year: number; description: string }[] = datesKeys
        .filter((year: number) => (year>=dates.first&&year<=dates.second))
        .map((year: number)=>{return {year, description: libDates.get(year)||''}})
    return yearsArray;
}