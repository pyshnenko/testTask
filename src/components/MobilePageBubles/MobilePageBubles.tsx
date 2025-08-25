import React, {useContext} from "react";
import { PageContext } from "../../store/context";
import styled from "styled-components";

export default function MobilePageBubles(): React.JSX.Element {

    const context = useContext(PageContext)

    return (
        <BubbleGroupOuterDiv>
            <BubbleGroupInnerDiv>
                <ArrayGenerator {...context} />
            </BubbleGroupInnerDiv>
        </BubbleGroupOuterDiv>
    )
}

interface ArrayGeneratorPropsType {
    totalPages: number,
    page: number,
    setPage: (page: number) => void
}

const ArrayGenerator = ({totalPages, page, setPage}: ArrayGeneratorPropsType): React.JSX.Element[] => {
    const expArray: React.JSX.Element[] = [];
    for (let i = 0; i < totalPages; i++) {
        expArray.push(
            <BubbleDiv onClick={()=>setPage(i+1)} style={{opacity: (page-1) === i ? 1 : 0.4}} />
        )
    }
    return expArray;
}

const BubbleDiv = styled.div`
    background-color: #42567A;
    width: 6px;
    height: 6px;
    border-radius: 50%;
`

const BubbleGroupOuterDiv = styled.div`
    position: absolute;
    bottom: 0;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    z-index: -1;
`

const BubbleGroupInnerDiv = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    width: 27%;
`