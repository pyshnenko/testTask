import { useRef, useLayoutEffect } from "react";
import { startPosition } from "../helpers/animation";
import { gsap } from "gsap/gsap-core";

/**
 * Хук для инициализации и анимации круговых элементов при первом рендере.
 * Выполняет начальную установку позиции и запускает анимацию масштабирования контейнеров.
 * 
 * @param CircleRef - Ссылка на DOM-элемент, содержащий круговые контейнеры.
 * @param page - Текущий номер страницы (используется для позиционирования).
 * @param totalPages - Общее количество страниц (определяет количество элементов).
 * @returns Флаг `isInitialized.current`, указывающий, был ли компонент инициализирован.
 * 
 * @example
 * const circleRef = useRef<HTMLDivElement>(null);
 * useCircleInitialization(circleRef, currentPage, totalSteps);
 */

export function useCircleInitialization(
  CircleRef: React.RefObject<HTMLDivElement | null>,
  page: number,
  totalPages: number
) {
  const isInitialized = useRef(false); //проверка на инициализацию

  useLayoutEffect(() => {
    if (!isInitialized.current && CircleRef.current) {
      startPosition(CircleRef, page, totalPages);
      
      // Сама анимашка
      gsap.fromTo(CircleRef.current.querySelectorAll(".circle-container"), {
        width: 0,
        height: 0
      }, {
        width: '26vw',
        height: '26vw',
      });
      
      isInitialized.current = true;
    }
  }, [CircleRef, page, totalPages]);

  return isInitialized.current;
}