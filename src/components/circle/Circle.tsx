import React, { useRef, useEffect, memo, useContext } from "react";
import { ChildGenerator } from "./helpers/PointComponents";
import { PointComponent } from "./helpers/pointStyled";
import { rotateOnStep } from "./helpers/animation";
import { gsap } from "gsap/gsap-core";
import { PageContext } from "../../context/context";
import { useCircleInitialization } from "./hook/useCircleInit";

interface CircleProps {
  theme: string;
}

/**
 * Компонент для отрисовки анимированных круговых элементов, связанных с текущей страницей.
 * Использует GSAP для анимации и управляет положением элементов при изменении активного шага.
 *
 * @param props - Объект с параметрами компонента.
 * @param props.theme - Тема оформления (например, цветовая схема).
 * @returns JSX-элемент с анимированным круговым контейнером.
 *
 * @example
 * <Circle theme="dark" />
 */

function Circle(props: CircleProps): React.JSX.Element {
  const { page, totalPages } = useContext(PageContext);

  const { theme } = props; // Получаем тему из пропсов для отображения

  const CircleRef = useRef<HTMLDivElement>(null); // Ссылка на контейнер круга

  useCircleInitialization(CircleRef, page, totalPages);

  useEffect(() => {
    const currentRef = CircleRef.current;
    return () => {
      gsap.killTweensOf(currentRef);
    };
  }, []);

  useEffect(() => {
    //При изменении активного шага поворачиваем круг и точки
    rotateOnStep(CircleRef, page, totalPages);
  }, [page, totalPages]);

  return (
    <>
      <PointComponent ref={CircleRef}>
        <div className="circle-container">{ChildGenerator({ theme })}</div>
      </PointComponent>
    </>
  );
}

export default memo(Circle);
