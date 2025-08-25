import React, { useContext } from "react";
import { StepDiv } from "../../helpers/styled";
import ButtonBox from "../ButtonBox/ButtonBox";
import { PageContext } from "../../store/context";
import {formatNumber} from "../../helpers/appHelpers";
import styled from "styled-components";
import { baseMediaWidth } from "../../consts";

export default function NumPageBox(): React.JSX.Element {

    const {page, totalPages} = useContext(PageContext);

    return (
        <StepDivBox>
            <StepDiv>
                {formatNumber(page)}/{formatNumber(totalPages)}
            </StepDiv>
            <ButtonBox />
        </StepDivBox>
    )
}

const StepDivBox = styled.div`
    @media (max-width: ${baseMediaWidth}px) {
        position: absolute;
        bottom: 20px;
        left: 20px;
    }
`