import styled from "styled-components";
import { baseMediaWidth } from "../../consts";

export const ButtonGroupDiv = styled.div`
  display: inline-flex;
  padding-bottom: 20px;
  padding-left: 80px;
  margin: 20px 0;
  width: 120px;
  justify-content: space-between;

  @media (max-width: ${baseMediaWidth}px) {
    padding-bottom: 0;
    padding-top: 10px;
    padding-left: 0;
    margin: 0;
    width: 60px;
  }
`;

export const ButtonDiv = styled.div`
    @media (max-width: ${baseMediaWidth}px) {
        zoom: 0.5;
    }
`