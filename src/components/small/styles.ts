import styled from "styled-components";

const styleOnHover = `
  &:hover:not(.disabled) {
    border-radius: 50%;
    box-shadow: 0 0 15px rgba(56, 119, 238, 0.3);
    background-color: rgba(56, 119, 238, 0.3);
  }
  &:active {
    animation: dim 0.3s ease forwards;
  }
  @keyframes dim {
    0% { opacity: 1; }
    100% { opacity: 0.5; }
  }
`;

export const StyledSVG = styled.svg`
  ${styleOnHover}
`;

export const StyledWhiteCircle = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);

  ${styleOnHover}
`;
