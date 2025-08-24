import type { JSX } from "react";
import styled from "styled-components";

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
    line-height: 30px; /* 150% */
  }
`;

export function TimelineEvent({
  year,
  description,
}: TimelineEventProps): JSX.Element {
  return (
    <StyledArticle className="flex flex-col">
      <h3 className="self-start text-2xl leading-tight text-blue-500 uppercase">
        {year}
      </h3>
      <p className="mt-4 text-xl leading-8 text-slate-600">{description}</p>
    </StyledArticle>
  );
}
