import {useState, useRef, useEffect, useMemo } from 'react';
import TimelineEvents from './components/TimeLineEvents';
import stepYears from './lib/stepYears';
import { gsap } from 'gsap';
import styled from 'styled-components';
import HeadText from './components/HeadText';
import { yearsDatesGenerator } from './components/helpers/appHelpers';
import Circle from './components/circle/Circle';
import 'swiper/css';
import './App.css'

const defaultH2Style = `
  font-size: 160px;
  margin: 0 50px;
  z-index: 1;`

const StyledLastDate = styled.h2`
  color: #5d5fef;
  ${defaultH2Style}
`;

const StyledNextDate = styled.h2`
  color: #ef5da8;
  ${defaultH2Style}
`;

const YearsBox = styled.div`
  display: inline-flex;
  height: 49vh;
  justify-content: center;
  width: 100%;
  position: relative;
  align-items: center;
  &::before { /* Горизонтальная линия */
    content: "";
    position: absolute;
    top: 50%; /* Вертикальное центрирование */
    left: 0;
    right: 0;
    height: 1px; /* Толщина линии */
    background-color: rgba(0, 0, 0, 0.1); /* Цвет линии */
  }
`;

const BodyStyle = styled.div`
  border-left: 1px solid #e3e6ed;
  border-right: 1px solid #e3e6ed;
  height: 99vh;
  &::after { /* Вертикальная линия */
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%; /* Горизонтальное центрирование */
    width: 1px; /* Толщина линии */
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const Slider = () => {

  const needDates = useRef({first: 1940, second: 1955});
  const swipebleBlockRef = useRef<HTMLDivElement>(null);

  const [dates, setDates] = useState({first: 1940, second: 1955});
  const [page, setPage] = useState(1);
  const [validYearsArray, setValidYearsArray] = useState<{ year: number; description: string; }[]>([]);

  const yearsDatesGenMemoised = useMemo(()=>yearsDatesGenerator(dates), [dates])

  useEffect(() => {
    if (swipebleBlockRef.current) {
      gsap.fromTo(swipebleBlockRef.current, {opacity: 0}, {opacity: 1, duration: 0.2});
    }
    setValidYearsArray(yearsDatesGenMemoised);
    return () => {
      gsap.killTweensOf(swipebleBlockRef.current);
    };
  }, []);

  useEffect(() => {
    let buf: {first?: number, second?: number}|null = null;
    const plus: boolean = dates.first < needDates.current.first;
    if (dates.first !== needDates.current.first)
      buf = {first: plus ? dates.first + 1 : dates.first - 1};
    if (dates.second !== needDates.current.second)
      buf = buf ? {...buf, second: plus ? dates.second + 1 : dates.second - 1} : 
      {second: plus ? dates.second + 1 : dates.second - 1};
    if (buf) setTimeout(()=>setDates({...dates, ...buf}), 10);
    if (dates.first === needDates.current.first && dates.second === needDates.current.second) {
      setValidYearsArray(yearsDatesGenMemoised);
      gsap.to(swipebleBlockRef.current, {opacity: 1, duration: 0.2});
    }
  }, [dates]);

  useEffect(() => {
    gsap.to(swipebleBlockRef.current, {opacity: 0, duration: 0.1});
    const step = stepYears.get(page);
    if (step) {
      needDates.current = {first: step.first, second: step.second};
      const plus: boolean = dates.first < step.first;
      setDates({
        first: plus?dates.first+1:dates.first-1, 
        second: plus ? dates.second+1 : dates.second-1});
    }
  }, [page]);

    return (
      <BodyStyle>
        <HeadText />
        <YearsBox>
          <StyledLastDate>{dates.first}</StyledLastDate>
          <StyledNextDate>{dates.second}</StyledNextDate>
          <Circle step={page} setStep={setPage} stepsCount={6} />
        </YearsBox>
        <button onClick={() => {
          page > 1 ? setPage(page - 1) : setPage(6);
          }}>старые даты</button>
        <button onClick={() => {
          page < 6 ? setPage(page + 1) : setPage(1);
          }}>новые даты</button>
        <div ref={swipebleBlockRef} className="swiper-container">
          <TimelineEvents events={validYearsArray} />
        </div>
      </BodyStyle>
    );
};

export default Slider;