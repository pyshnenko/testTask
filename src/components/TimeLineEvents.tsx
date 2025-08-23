import * as React from "react";
import { TimelineEvent } from "./TimelineEvent";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styled from 'styled-components'

interface PropsType {
  events: Array<{ year: number; description: string }>;
}

const StyledSection = styled.section`
  max-width: 100vw;
  max-height: 135vh;
`

export default function TimelineEvents(props: PropsType): React.JSX.Element {

  const { events } = props

  return (
    <StyledSection>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={events.length > 3 ? 3 : events.length}
        navigation={true}
        centeredSlides={events.length < 3}
      >
      {events.map((event, index) => (
        <SwiperSlide key={index} style={{ maxWidth: '500px' }}>
          <TimelineEvent
            key={event.year}
            year={event.year}
            description={event.description}
          />
        </SwiperSlide>
      ))}
      </Swiper>
    </StyledSection>
  );
}