/**
 * @file Компоненты и функции для анимации круга и точек
 * @CircleRef - ссылка на круг
 * @page - текущий активный шаг
 * @totalPage - общее количество шагов
 * @rotateOnStep - функция для анимации поворота круга и точек
 * @returns void
 * @note Используется в компоненте Circle для управления анимацией при смене активного
 */

import { coordinatesGeneration } from "../helper";
import { gsap } from "gsap";

export function rotateOnStep(
  CircleRef: React.RefObject<HTMLDivElement | null>,
  page: number,
  totalPage: number,
) {
  if (CircleRef.current) {
    const points = [
      ...CircleRef.current.querySelectorAll(".point"),
      ...CircleRef.current.querySelectorAll(".activePoint"),
    ];
    gsap.to(CircleRef.current, {
      duration: 1,
      delay: 0.35,
      rotate: -(360 / totalPage) * (page - 1),
      ease: "power2.out",
    });
    points.forEach((point) => {
      gsap.to(point, {
        delay: 0.05,
        duration: 0.5,
        rotate: (360 / totalPage) * (page - 1),
        ease: "power2.out",
      });
    });
  }
}

export function startPosition(
  CircleRef: React.RefObject<HTMLDivElement | null>,
  page: number,
  totalPage: number,
) {
  if (CircleRef.current) {
    const points = [
      ...CircleRef.current.querySelectorAll(".point"),
      ...CircleRef.current.querySelectorAll(".activePoint"),
    ];
    const coordinates = coordinatesGeneration(totalPage, page); //можо мемоизировать но она применяется только при монтировании
    points.forEach((point) => {
      const realIndex = Number(point.getAttribute("data-number")) - 1;
      gsap.set(point, {
        top: `${coordinates[realIndex].y}%`,
        left: `${coordinates[realIndex].x}%`,
      });
    });
  }
}
