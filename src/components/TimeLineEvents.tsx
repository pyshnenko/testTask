import React, { useRef, useState, useContext } from "react";
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
    margin: 20px 0
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  @media (max-width: ${baseMediaWidth}px) {
    min-width: 0
  }
`;

export default function TimelineEvents(props: PropsType): React.JSX.Element {
  const { events } = props;

  const {pageWidth} = useContext(PageContext)

  const swipebleLeftButtonRef = useRef<HTMLDivElement>(null);
  const swipebleRightButtonRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperRef>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      console.log(
        swiperRef.current.swiper.isBeginning,
        swiperRef.current.swiper.isEnd,
      );
      setIsBeginning(swiperRef.current.swiper.isBeginning);
      setIsEnd(swiperRef.current.swiper.isEnd);
    }
  };

  const slidersOnDisplay = (pageWidth: number) => {
    if (pageWidth < baseMediaWidth) return 1
    else return 3
  }

  return (
    <SwiperFullBox>
      <ButtonDiv ref={swipebleLeftButtonRef}>
        {!isBeginning && <SwiperLeftButton visible={pageWidth > baseMediaWidth} />}
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
          slidesPerView={slidersOnDisplay(pageWidth)}
          navigation={{
            nextEl: swipebleRightButtonRef.current,
            prevEl: swipebleLeftButtonRef.current,
          }}
          style={{ margin: "0 0px" }}
          centeredSlides={events.length < 3}
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
