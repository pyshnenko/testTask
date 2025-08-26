import { useState, useRef, useEffect, useLayoutEffect, useMemo } from "react";
import TimelineEvents from "./components/TimeLineEvents/TimeLineEvents";
import { gsap } from "gsap";
import HeadText from "./components/HeadText";
import { yearsDatesGenerator } from "./helpers/appHelpers";
import YearsBox from "./components/YearsBox/YearsBox";
import { baseMediaWidth, totalPages } from "./consts";
import { PageContext } from "./store/context";
import { BodyStyle, WorkerWindow } from "./helpers/styled";
import NumPageBox from "./components/NumPageBox/NumPageBox";
import ThemeTextBox from "./components/small/ThemeTextBox";
import stepYears from "./lib/stepYears";
import "swiper/swiper-bundle.css";
import "./helpers/App.css";

export default function App() {
  const swipebleBlockRef = useRef<HTMLDivElement>(null); // ref для блока свайпера
  const bodyRef = useRef<HTMLDivElement>(null); // ref для body

  const [page, setPage] = useState(1);
  const [pageWidth, setPageWidth] = useState(window?.innerWidth || 0);
  const [validYearsArray, setValidYearsArray] = useState<
    { year: number; description: string }[]
  >([]);

  /**
   * Генерируем массив событий по годам. Мемоизировано
   * Зависит от значения `page` и вычисляется только при его изменении.
   */

  const yearsDatesGenMemoised = useMemo(
    () => yearsDatesGenerator(page),
    [page],
  );

  /**
   * отслеживание ширины страницы
   * запускаем до монтирования
   */

  useLayoutEffect(() => {
    const handleResize = (event: UIEvent) => {
      setPageWidth((event.target as Window).innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Первичный эффект, выполняющийся при монтировании компонента:
   * 1. Анимирует появление элемента с информацие  (увеличение прозрачности).
   * 2. Инициализирует массив `validYearsArray` данными.
   * 3. Очищает анимацию при размонтировании компонента.
   */

  useEffect(() => {
    if (swipebleBlockRef.current) {
      gsap.fromTo(
        swipebleBlockRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.2 },
      );
    }
    if (bodyRef.current) {
      gsap.fromTo(
        bodyRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, delay: 0.5 })
    }
    setValidYearsArray(yearsDatesGenMemoised);
    return () => {
      gsap.killTweensOf(swipebleBlockRef.current);
    };
  }, []);

  /**
   * Эффект, срабатывающий при изменении страницы (`page`):
   * 1. Анимирует исчезновение элемента `swipebleBlockRef` (уменьшение прозрачности).
   * 2. Обновляет `validYearsArray` новыми данными.
   * 3. Анимирует появление элемента с задержкой (1 секунда).
   */

  useEffect(() => {
    gsap.to(swipebleBlockRef.current, {
      opacity: 0,
      duration: 0.1,
      onComplete: () => {
        setValidYearsArray(yearsDatesGenMemoised);
        gsap.to(swipebleBlockRef.current, {
          opacity: 1,
          duration: 0.2,
          delay: 1,
        });
      },
    });
  }, [page]);

  return (
    <BodyStyle ref={bodyRef}>
      <PageContext.Provider value={{ page, setPage, totalPages, pageWidth }}>
        <WorkerWindow>
          <HeadText />
          <YearsBox />
          {(pageWidth < baseMediaWidth) && <ThemeTextBox theme={stepYears.get(page + 1)?.theme || ""} />}
          <NumPageBox />
          <div ref={swipebleBlockRef} className="swiper-container">
            <TimelineEvents events={validYearsArray} />
          </div>
        </WorkerWindow>
      </PageContext.Provider>
    </BodyStyle>
  );
};
