import { createContext } from "react";
import { totalPages } from "../consts";

/**
 * Контекст приложения
 * @context PageContext
 * @prop {number} page - текущая страница
 * @prop {function} setPage - функция для установки страницы
 * @prop {number} totalPages - общее количество страниц, берется из постоянной, описанной в `consts.ts`
 * @prop {number} pageWidth - ширина страницы
 */

export const PageContext = createContext({
  page: 1,
  setPage: (_page: number) => {},
  totalPages: totalPages,
  pageWidth: 0,
});
