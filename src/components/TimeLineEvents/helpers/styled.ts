import styled from "styled-components";
import { baseMediaWidth } from "../../../consts";

export const SwiperSection = styled.section`
  max-width: 87.5%;
  max-height: 135px;
  @media (max-width: ${baseMediaWidth}px) {
    max-width: 100%;
  }
`;

export const SwiperFullBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${baseMediaWidth}px) {
    margin: 20px 0;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.25%;
  @media (max-width: ${baseMediaWidth}px) {
    min-width: 0;
  }
`;
