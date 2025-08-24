import styled from "styled-components";

interface ButtonProps {
  enabled?: boolean;
}

const Circle = () => (
  <circle
    cx="25"
    cy="25"
    r="24.5"
    transform="matrix(-1 0 0 1 50 0)"
    stroke="#42567A"
    stroke-opacity="0.5"
  />
);
const LeftArrow = ({ color }: { color: string }) => (
  <path
    d="M27.4999 18.75L21.2499 25L27.4999 31.25"
    stroke={color}
    stroke-width="2"
  />
);
const RightArrow = ({ color }: { color: string }) => (
  <path
    d="M22.5001 18.75L28.7501 25L22.5001 31.25"
    stroke={color}
    stroke-width="2"
  />
);

export function LeftButton(props: ButtonProps) {
  const { enabled = true } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <g opacity={enabled ? "1" : "0.5"}>
        {Circle()}
        {LeftArrow({ color: "#42567A" })}
      </g>
    </svg>
  );
}

export function RightButton(props: ButtonProps) {
  const { enabled = true } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <g opacity={enabled ? "1" : "0.5"}>
        {Circle()}
        {RightArrow({ color: "#42567A" })}
      </g>
    </svg>
  );
}

const StyledWhiteCircle = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);
`;

export function SwiperLeftButton(props: ButtonProps) {
  const { enabled = true } = props;
  return (
    <StyledWhiteCircle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g opacity={enabled ? "1" : "0"}>{LeftArrow({ color: "#3877EE" })}</g>
      </svg>
    </StyledWhiteCircle>
  );
}

export function SwiperRightButton(props: ButtonProps) {
  const { enabled = true } = props;
  return (
    <StyledWhiteCircle>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g opacity={enabled ? "1" : "0"}>{RightArrow({ color: "#3877EE" })}</g>
      </svg>
    </StyledWhiteCircle>
  );
}
