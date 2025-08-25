import React, { useContext } from "react";
import { LeftButton, RightButton } from "../small/Buttons";
import styled from "styled-components";
import { PageContext } from "../../store/context";
import { baseMediaWidth } from "../../consts";

export default function ButtonBox(): React.JSX.Element {

    const {page, setPage, totalPages, pageWidth} = useContext(PageContext)

    return (
        <ButtonGroupDiv>
          <ButtonDiv
            onClick={() => {
              if (page > 1) setPage(page - 1);
            }}
          >
            <LeftButton enabled={page > 1}/>
          </ButtonDiv>
          <ButtonDiv
            onClick={() => {
              if (page < totalPages) setPage(page + 1);
            }}
          >
            <RightButton enabled={page < totalPages}/>
          </ButtonDiv>
        </ButtonGroupDiv>
    )
}



const ButtonGroupDiv = styled.div`
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

const ButtonDiv = styled.div`
    @media (max-width: ${baseMediaWidth}px) {
        zoom: 0.5;
    }
`