/**
 * стилизованные компоненты
 */

import styled from "styled-components";
import { baseMediaWidth } from "../../consts";

const defaultH2Style = `
  position: relative;
  font-size: 160px;
  margin: 0 50px;
  z-index: 1;
  top: -5px;
  @media (max-width: ${baseMediaWidth}px) {
    & {
        margin: 0 20px;
        font-size: 56px;
    }
  }
`;

export const StyledLastDate = styled.h2`
  color: #3877ee;
  ${defaultH2Style}
`;

export const StyledNextDate = styled.h2`
  color: #ef5da8;
  ${defaultH2Style}
`;

export const YearsBoxStyled = styled.div`
  display: inline-flex;
  height: 33vh;
  justify-content: center;
  width: 100%;
  position: relative;
  align-items: center;
  @media (min-width: ${baseMediaWidth+1}px) {
    &::before {
        /* Горизонтальная линия */
        content: "";
        position: absolute;
        top: 50%; /* Вертикальное центрирование */
        left: 0;
        right: 0;
        height: 1px; /* Толщина линии */
        background-color: rgba(0, 0, 0, 0.1); /* Цвет линии */
    }
  }
  @media (max-width: ${baseMediaWidth}px) {
    &::before {
        /* Горизонтальная линия */
        content: "";
        position: absolute;
        top: 100%; /* Вертикальное центрирование */
        width: 100%;
        left: 0;
        right: 0;
        height: 1px; /* Толщина линии */
        background-color: rgba(0, 0, 0, 0.1); /* Цвет линии */
    }
  }
`;