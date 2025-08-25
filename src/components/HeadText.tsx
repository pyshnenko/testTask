import styled from "styled-components";
import React from "react";
import { baseMediaWidth } from "../consts";

const HeadTextDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 7.5vh;

  @media (min-width: ${baseMediaWidth + 1}px) {
    .gradientLine {
      background: linear-gradient(0deg, #ef5da8 0%, #3877ee 100%);
      height: 120px;
      width: 5px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  h3 {
    font-size: 46px;
    color: #42567a;
    padding: 0;
    margin: 0 0 0 80px;
    @media (max-width: ${baseMediaWidth}px) {
      font-size: 20px;
      margin: 0;
    }
  }
`;

/**
 * Компонент верхнего текстового блока
 *
 * @component
 * @returns {React.JSX.Element} JSX-элемент с заголовком и декоративной линией
 * @remarks
 * Отображает два заголовка "Исторические" и "даты" с декоративной градиентной линией.
 * Использует стилизованный контейнер `HeadTextDiv` для верстки.
 */
export default function HeadText(): React.JSX.Element {
  return (
    <HeadTextDiv>
      <div className="gradientLine"></div>
      <div>
        <h3>Исторические</h3>
        <h3>даты</h3>
      </div>
    </HeadTextDiv>
  );
}
