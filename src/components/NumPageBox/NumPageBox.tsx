import React, { useContext } from "react";
import { StepDiv } from "../../helpers/styled";
import ButtonBox from "../ButtonBox/ButtonBox";
import { PageContext } from "../../context/context";
import { formatNumber } from "../../helpers/appHelpers";
import styled from "styled-components";
import { baseMediaWidth } from "../../consts";
import MobilePageBubles from "../MobilePageBubles/MobilePageBubles";

/**
 * Компонент отображения блока номеров страниц
 *
 * @component
 * @returns {React.JSX.Element} JSX-элемент с разметкой номеров страниц и кнопок
 * @remarks
 * Использует контекст `PageContext` для получения текущей страницы, общего количества страниц и ширины экрана.
 * Отображает форматированные номера страниц, кнопки навигации и линейное отображение прогресса точками при малой ширине экрана.
 */

export default function NumPageBox(): React.JSX.Element {
  const { page, totalPages, pageWidth } = useContext(PageContext);

  return (
    <StepDivBox>
      <StepDiv>
        {formatNumber(page)}/{formatNumber(totalPages)}
      </StepDiv>
      <ButtonBox />
      {pageWidth < baseMediaWidth && <MobilePageBubles />}
    </StepDivBox>
  );
}

const StepDivBox = styled.div`
  @media (max-width: ${baseMediaWidth}px) {
    position: absolute;
    padding: 0 20px;
    bottom: 0px;
    left: 0px;
    z-index: 2;
  }
`;
