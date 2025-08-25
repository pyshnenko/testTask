import React from "react";
import styled from "styled-components";

interface ThemeTextBoxType {
  theme: string;
}

const StyledH = styled.h4`
  color: #42567a;
  position: relative;
  top: -40px;
  margin: 0;
  padding: 0;
`;

export default function ThemeTextBox(
  props: ThemeTextBoxType,
): React.JSX.Element {
  return (
    <>
      <StyledH>{props.theme}</StyledH>
    </>
  );
}
