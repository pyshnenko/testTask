import React, { useRef, useContext, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react"; // Импортируем useGSAP
import stepYears from "../../lib/stepYears";
import Circle from "../circle/Circle";
import { gsap } from "gsap/gsap-core";
import { PageContext } from "../../context/context";
import { YearsBoxStyled, StyledLastDate, StyledNextDate } from "./styled";
import { baseMediaWidth } from "../../consts";
/**
 * Компонент отображения временного диапазона (годов)
 *
 * @component
 * @returns {React.JSX.Element} JSX-элемент с анимированным отображением годов и круга с номерами страниц
 * @remarks
 * Использует GSAP для анимации изменения годов в зависимости от текущей страницы.
 * При ширине экрана больше `baseMediaWidth` отображает круг с номерами страниц.
 */
export default function YearsBox(): React.JSX.Element {
  /**
   * Данные из контекста страницы
   * @param {number} page - Текущий номер страницы
   * @param {number} pageWidth - Ширина страницы для адаптивного отображения
   * @see {@link PageContext} - Контекст страницы
   */
  const { page, pageWidth } = useContext(PageContext);

  /**
   * Ссылки на DOM-элементы с годами
   * @see {@link StyledLastDate} - ссылка на элемент с годом начала временного диапазона
   * @see {@link StyledNextDate} - ссылка на элемент с годом конца временного диапазона
   */

  const fYearRef = useRef<HTMLDivElement>(null);
  const sYearRef = useRef<HTMLDivElement>(null);

  const [dates, setDates] = useState({
    first: 1980,
    second: 1986,
    theme: "Компьютеры",
  });

  /**
   * Анимация перехода между годами при смене страницы
   * @param {Object} _ - Неиспользуемый параметр GSAP
   * @param {Array<gsap.TweenTarget>} ___ - Неиспользуемый параметр GSAP
   * @see {@link gsap.to}
   * @see {@link stepYears}
   * @see {@link baseMediaWidth}
   */

  useGSAP(() => {
    if (fYearRef.current) {
      gsap.to(fYearRef.current, {
        duration: 1,
        innerText: stepYears.get(page)?.first,
        snap: { innerText: 1 },
        ease: "power1.inOut",
        onUpdate: () => {
          setDates({
            ...dates,
            first: parseInt(fYearRef.current?.innerText || "", 10),
          });
        },
      });
    }
    if (sYearRef.current) {
      gsap.to(sYearRef.current, {
        duration: 1,
        innerText: stepYears.get(page)?.second,
        snap: { innerText: 1 },
        ease: "power1.inOut",
        onUpdate: () => {
          setDates({
            ...dates,
            second: parseInt(sYearRef.current?.innerText || "", 10),
          });
        },
        onComplete: () => {
          setDates({
            first: stepYears.get(page)?.first || 0,
            second: stepYears.get(page)?.second || 0,
            theme: stepYears.get(page)?.theme || "",
          });
        }
      });
    }
  }, [page]);

  useEffect(() => {console.log(pageWidth)}, [pageWidth]);

  return (
    <YearsBoxStyled>
      <StyledLastDate ref={fYearRef}>{dates.first}</StyledLastDate>
      <StyledNextDate ref={sYearRef}>{dates.second}</StyledNextDate>
      {pageWidth > baseMediaWidth ? <Circle theme={dates.theme} /> : null}
    </YearsBoxStyled>
  );
}
