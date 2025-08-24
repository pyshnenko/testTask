import { gsap } from "gsap/gsap-core";
import React, { useRef, useEffect } from "react";
import { StyledP } from "./pointStyled";

/**
 * Компонент для отображения круга с точками
 */

/**
 *
 * @param count Количество точек
 * @param setStep Задание активного шага
 * @param step Активный шаг
 * @returns Создаем набор точек на круге в зависимости от их количества
 */

interface CircleProps {
  step: number;
  stepsCount: number;
  setStep: (step: number) => void;
  theme: string;
}

export const ChildGenerator = (props: CircleProps): React.JSX.Element => {
  const { stepsCount: count, setStep, step, theme } = props;

  const StyledPRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      StyledPRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, delay: 2 },
    );
  }, [step]);

  const children: React.JSX.Element[] = [];
  for (let i = 1; i <= count; i++) {
    children.push(
      <div
        onClick={() => setStep(i)}
        key={i}
        className={step === i ? "activePoint" : "point"}
        data-number={i.toString()}
      >
        {step === i && <StyledP ref={StyledPRef}>{theme}</StyledP>}
      </div>,
    );
  }
  return <>{children}</>;
};
