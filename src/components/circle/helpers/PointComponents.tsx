import { gsap } from "gsap/gsap-core";
import React, { useRef, useEffect, useContext } from "react";
import { StyledP } from "./pointStyled";
import { PageContext } from "../../../store/context";

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
  theme: string;
}

export const ChildGenerator = (props: CircleProps): React.JSX.Element => {
  const { page, setPage, totalPages } = useContext(PageContext);

  const { theme } = props;

  const StyledPRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    return () => {
      gsap.killTweensOf(StyledPRef.current);
    };
  }, []);

  useEffect(() => {
    gsap.fromTo(
      StyledPRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4, delay: 1.5 },
    );
  }, [page]);

  const children: React.JSX.Element[] = [];
  for (let i = 1; i <= totalPages; i++) {
    children.push(
      <div
        onClick={() => setPage(i)}
        key={i}
        className={page === i ? "activePoint" : "point"}
        data-number={i.toString()}
      >
        {page === i && <StyledP ref={StyledPRef}>{theme}</StyledP>}
      </div>,
    );
  }
  return <>{children}</>;
};
