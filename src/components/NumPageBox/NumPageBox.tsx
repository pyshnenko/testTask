import React, { useContext } from "react";
import { StepDiv } from "../../helpers/styled";
import ButtonBox from "../ButtonBox/ButtonBox";
import { PageContext } from "../../store/context";
import {formatNumber} from "../../helpers/appHelpers";
import styled from "styled-components";
import { baseMediaWidth } from "../../consts";
import MobilePageBubles from "../MobilePageBubles/MobilePageBubles";

export default function NumPageBox(): React.JSX.Element {

    const {page, totalPages, pageWidth} = useContext(PageContext);

    return (
        <StepDivBox>
            <StepDiv>
                {formatNumber(page)}/{formatNumber(totalPages)}
            </StepDiv>
            <ButtonBox />
            {(pageWidth < baseMediaWidth) && <MobilePageBubles />}
        </StepDivBox>
    )
}

const StepDivBox = styled.div`
    @media (max-width: ${baseMediaWidth}px) {
        position: absolute;
        padding: 0 20px;
        bottom: 0px;
        left: 0px;
        z-index: 2;
    }
`