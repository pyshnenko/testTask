import React, { useRef, useState, useContext, useEffect } from "react";
import { TimelineEvent } from "./TimelineEvent";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import { Navigation } from "swiper/modules";
import styled from "styled-components";
import { SwiperLeftButton, SwiperRightButton } from "./small/Buttons";
import { PageContext } from "../store/context";
import { baseMediaWidth } from "../consts";

interface PropsType {
  events: Array<{ year: number; description: string }>;
}

const SwiperSection = styled.section`
  max-width: 87%;
  max-height: 135px;
  @media (max-width: ${baseMediaWidth}px) {
    max-width: 100%;
  }
`;

const SwiperFullBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: ${baseMediaWidth}px) {
    margin: 20px 0;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  @media (max-width: ${baseMediaWidth}px) {
    min-width: 0;
  }
`;

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

  const swipebleLeftButtonRef = useRef<HTMLDivElement>(null);
  const swipebleRightButtonRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
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
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  const slidersOnDisplay = (pageWidth: number, eventsNums: number) => {
    if (pageWidth < baseMediaWidth) return 1;
    else if (eventsNums < 3) return eventsNums;
    else return 3;
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
