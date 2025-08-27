import React, { useRef, useState, useContext, useEffect } from "react";
import { TimelineEvent } from "../TimelineEvent";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import { SwiperLeftButton, SwiperRightButton } from "../small/Buttons";
import { PageContext } from "../../context/context";
import { baseMediaWidth } from "../../consts";
import { SwiperFullBox, ButtonDiv, SwiperSection } from "./helpers/styled";
import { slidersOnDisplay } from "./helpers/helper";

interface PropsType {
  events: Array<{ year: number; description: string }>;
}

/**
 * Компонент временной шкалы с событиями
 *
 * @component
 * @param {Array<Event>} props.events - Массив исторических событий
 * @returns {React.JSX.Element} JSX-элемент с интерактивной временной шкалой
 * @remarks
 * Реализует адаптивный слайдер с навигацией, используя библиотеку Swiper.
 * Отображает события в зависимости от ширины экрана и количества элементов.
 */
export default function TimelineEvents(props: PropsType): React.JSX.Element {
  const { events } = props;

  const { pageWidth } = useContext(PageContext);

  const swipebleLeftButtonRef = useRef<HTMLDivElement>(null); // Ссылка на элемент "Назад"
  const swipebleRightButtonRef = useRef<HTMLDivElement>(null); // Ссылка на элемент "Вперед"
  const swiperRef = useRef<SwiperRef>(null); // Ссылка на экземпляр Swiper

  const [isBeginning, setIsBeginning] = useState(true); // true - если слайдер находится в начале. Убираем кнопку "Назад"
  const [isEnd, setIsEnd] = useState(false); // true - если слайдер находится в конце. Убираем кнопку "Вперед"
  /**
   * Обновление состояния кнопки "Далее" слайдера при изменении страницы
   * @see {@link useEffect}
   */
  useEffect(() => {
    setIsEnd(events.length <= 3);
  }, [events]);

  /**
   * Обработчик изменения слайда
   * отображает или скрывает кнопки "Далее" и "Назад" в зависимости от текущего состояния слайдера
   * @see {@link Swiper}
   */

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper; // Получаем положение слайдера
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    }
  };

  return (
    <SwiperFullBox>
      <ButtonDiv ref={swipebleLeftButtonRef}>
        {!isBeginning && (
          <SwiperLeftButton visible={pageWidth > baseMediaWidth} />
        )}
      </ButtonDiv>
      <SwiperSection>
        <Swiper
          ref={swiperRef}
          onSwiper={(swiper) => {
            if (swiperRef.current) {
              swiperRef.current.swiper = swiper;
            }
          }}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={slidersOnDisplay(pageWidth, events.length)}
          navigation={{
            nextEl: swipebleRightButtonRef.current,
            prevEl: swipebleLeftButtonRef.current,
          }}
          style={{ margin: "0 0px" }}
          onSlideChange={handleSlideChange}
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <TimelineEvent
                key={event.year}
                year={event.year}
                description={event.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperSection>
      <ButtonDiv ref={swipebleRightButtonRef}>
        {!isEnd && <SwiperRightButton visible={pageWidth > baseMediaWidth} />}
      </ButtonDiv>
    </SwiperFullBox>
  );
}
