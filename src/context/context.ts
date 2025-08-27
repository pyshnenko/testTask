import { createContext } from "react";
import { totalPages } from "../consts";

interface PageContextType {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
  pageWidth: number;
}

/**
 * Контекст приложения
 * @context PageContext
 * @prop {number} page - текущая страница
 * @prop {function} setPage - функция для установки страницы
 * @prop {number} totalPages - общее количество страниц, берется из постоянной, описанной в `consts.ts`
 * @prop {number} pageWidth - ширина страницы
 */

export const PageContext = createContext<PageContextType>({
  page: 1,
  setPage: () => {},
  totalPages: totalPages,
  pageWidth: 0,
});
