import { createContext } from "react";
import { totalPages } from "../consts";

export const PageContext = createContext({
  page: 1,
  setPage: (page: number) => {},
  totalPages: totalPages,
  pageWidth: 0
});