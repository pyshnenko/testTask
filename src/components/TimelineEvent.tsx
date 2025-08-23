import type { JSX } from "react";
import styled from 'styled-components'

interface TimelineEventProps {
  year: number;
  description: string;
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  h3 {
    font-size: 25px;
    margin: 0;
    color: #3877ee;
    text-transform: uppercase;
  }

  p {
    margin-top: 1rem;
    font-size: 1.25rem;
    color: #475569; 
  }
`;

export function TimelineEvent({ year, description }: TimelineEventProps): JSX.Element {
  return (
    <StyledArticle className="flex flex-col">
      <h3 className="self-start text-2xl leading-tight text-blue-500 uppercase">
        {year}
      </h3>
      <p className="mt-4 text-xl leading-8 text-slate-600">
        {description}
      </p>
    </StyledArticle>
  );
}
