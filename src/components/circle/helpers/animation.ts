/**
 * @file Компоненты и функции для анимации круга и точек
 * @CircleRef - ссылка на круг
 * @step - текущий активный шаг
 * @stepsCount - общее количество шагов
 * @rotateOnStep - функция для анимации поворота круга и точек
 * @returns void
 * @note Используется в компоненте Circle для управления анимацией при смене активного
 */

import { coordinatesGeneration } from "../helper";
import { gsap } from "gsap";

export function rotateOnStep(
  CircleRef: React.RefObject<HTMLDivElement | null>,
  step: number,
  stepsCount: number,
) {
  if (CircleRef.current) {
    const points = [
      ...CircleRef.current.querySelectorAll(".point"),
      ...CircleRef.current.querySelectorAll(".activePoint"),
    ];
    gsap.to(CircleRef.current, {
      duration: 1,
      delay: 0.2,
      rotate: -(360 / stepsCount) * (step - 1),
      ease: "power2.out",
    });
    points.forEach((point) => {
      gsap.to(point, {
        duration: 0.37,
        rotate: (360 / stepsCount) * (step - 1),
        ease: "power2.out",
      });
    });
  }
}

export function startPosition(
  CircleRef: React.RefObject<HTMLDivElement | null>,
  step: number,
  stepsCount: number,
) {
  if (CircleRef.current) {
    const points = [
      ...CircleRef.current.querySelectorAll(".point"),
      ...CircleRef.current.querySelectorAll(".activePoint"),
    ];
    const coordinates = coordinatesGeneration(stepsCount, step); //можо мемоизировать но она применяется только при монтировании
    points.forEach((point) => {
      const realIndex = Number(point.getAttribute("data-number")) - 1;
      gsap.set(point, {
        top: `${coordinates[realIndex].y}%`,
        left: `${coordinates[realIndex].x}%`,
      });
    });
  }
}
