import React, { useContext } from "react";
import { LeftButton, RightButton } from "../small/Buttons";
import { PageContext } from "../../store/context";
import { ButtonGroupDiv, ButtonDiv } from "./styled";

export default function ButtonBox(): React.JSX.Element {
  const { page, setPage, totalPages } = useContext(PageContext);

  return (
    <ButtonGroupDiv>
      <ButtonDiv
        onClick={() => {
          if (page > 1) setPage(page - 1);
        }}
      >
        <LeftButton enabled={page > 1} />
      </ButtonDiv>
      <ButtonDiv
        onClick={() => {
          if (page < totalPages) setPage(page + 1);
        }}
      >
        <RightButton enabled={page < totalPages} />
      </ButtonDiv>
    </ButtonGroupDiv>
  );
}
