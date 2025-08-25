import styled from "styled-components";
import { baseMediaWidth } from "../consts";

export const WorkerWindow = styled.div`
  height: 100vh;
  @media (min-width: ${baseMediaWidth-1}px) {
    border-left: 1px solid #e3e6ed;
    border-right: 1px solid #e3e6ed;
    &::after {
        /* Вертикальная линия */
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 56%; /* Горизонтальное центрирование */
        width: 1px; /* Толщина линии */
        background-color: rgba(0, 0, 0, 0.1);
    }
}
`;

export const StepDiv = styled.p`
  padding: 0 80px;
  font-family: "PT Sans";
  margin: 0;
  color: #42567a;
  @media (max-width: ${baseMediaWidth}px) {
    &{
        padding: 0;
    }
  }
`;

export const BodyStyle = styled.div`
  padding: 0 5vw 0 17vw;
  @media (max-width: ${baseMediaWidth}px) {
    & {
      padding: 0 20px;
    }
  }
`;