import React, { useRef, useEffect, memo } from "react";
import styled from "styled-components";
import { coordinatesGeneration } from "./helper";
import { gsap } from 'gsap';

interface CircleProps {
    step: number;
    setStep: (step: number) => void;
    stepsCount: number;
}

const BaseCircleStyle = styled.div`  // Добавляем типизацию CircleProps
    position: absolute;

    .circle-container {
        position: relative;
        width: 40vw;
        height: 40vw;
        border-radius: 50%;
        margin: 50px auto;
        border: 1px solid rgba(66, 86, 122, 0.1); /* Круглая линия */
        z-index: 1;
    }

    .point, .activePoint {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #42567A;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 0; /* Скрываем цифру изначально */
        transform: translate(-50%, -50%); /*  Центрируем точки на линии */
    }

    .point:hover, .activePoint {
        width: 56px;
        height: 56px;
        font-size: 16px; /* Отображаем цифру при наведении */
        border: 1px solid rgba(48, 62, 88, 0.5);
        background-color: #f4f5f9; /* Меняем цвет при наведении */
        font-size: 20px; /* Отображаем цифру при наведении */
    }

    /* Расположение точек */
    .point, .activePoint { top: 50%; left: 50%; transform: translate(-50%, -50%); }

    /* Стили для цифр внутри точек */
    .point::after {
        content: attr(data-number); /* Берем число из data-атрибута */
        display: none; /* Скрываем изначально */
    }

    .activePoint::after {
        content: attr(data-number); /* Берем число из data-атрибута */
    }
    .point:hover::after, .activePoint::after {
        display: block; /* Показываем при наведении */
        color: #42567A;
    }

    .point {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0; /* Скрываем цифру */
        color: #42567A;
    }
`;

function Circle(props: CircleProps): React.JSX.Element {

    const { step, stepsCount, setStep } = props;

    const CircleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (CircleRef.current) {
            const points = [
                ...CircleRef.current.querySelectorAll('.point'),
                ...CircleRef.current.querySelectorAll('.activePoint')
            ];
            const coordinates = coordinatesGeneration(stepsCount, step); 
            points.forEach((point) => {
                const realIndex = Number(point.getAttribute('data-number')) - 1;
                gsap.to(point, {
                    duration: 0.2,
                    top: `${coordinates[realIndex].y}%`,
                    left: `${coordinates[realIndex].x}%`,
                });
            });
        }
    }, [step, stepsCount]);

    return (
        <BaseCircleStyle ref={CircleRef}>
            <div className="circle-container">
                {ChildGenerator(stepsCount, setStep, step)}
            </div>
        </BaseCircleStyle>
    )
}

const ChildGenerator = (count: number, setStep: (step: number)=>void, step: number): React.JSX.Element => {
    const children: React.JSX.Element[] = [];
    for (let i = 1; i <= count; i++) {
        children.push(<div onClick={()=>setStep(i)} key={i} className={step===i?"activePoint":"point"} data-number={i.toString()}></div>);
    }
    return <>{children}</>;
}

export default memo(Circle);
