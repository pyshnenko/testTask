import type { JSX } from "react";
import styled from "styled-components";
import { baseMediaWidth } from "../consts";

interface TimelineEventProps {
  year: number;
  description: string;
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3 {
    color: #3877ee;
    font-family: "Bebas Neue";
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 30px */
    text-transform: uppercase;
    margin: 0;
  }

  p {
    color: var(--Black-blue, #42567a);
    font-family: "PT Sans";
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
  }

  @media (max-width: ${baseMediaWidth}px) {
    p {
      margin: 15px 0;
    }
  }
`;

/**
 * Компонент для отображения события в свайпере.
 * Принимает данные о годе и описании события и рендерит их в стилизованном блоке.
 * 
 * @param props - Объект с параметрами компонента.
 * @param props.year - Год события (обязательный).
 * @param props.description - Описание события (обязательное).
 * @returns JSX-элемент, представляющий событие в свайпере.
 * 
 * @example
 * <TimelineEvent year={2023} description="Выход нового продукта" />
 */

export function TimelineEvent({
  year,
  description,
}: TimelineEventProps): JSX.Element {
  return (
    <StyledArticle>
      <h3>
        {year}
      </h3>
      <p>{description}</p>
    </StyledArticle>
  );
}
