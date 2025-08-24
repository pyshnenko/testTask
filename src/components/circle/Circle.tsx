import React, { useRef, useEffect, memo } from "react";
import { ChildGenerator } from "./helpers/PointComponents";
import { PointComponent } from "./helpers/pointStyled";
import { rotateOnStep, startPosition } from "./helpers/animation";

interface CircleProps {
  step: number;
  setStep: (step: number) => void;
  theme: string;
  stepsCount: number;
}

function Circle(props: CircleProps): React.JSX.Element {
  const { step, stepsCount, setStep, theme } = props;

  const CircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //При изменении активного шага поворачиваем круг и точки
    rotateOnStep(CircleRef, step, stepsCount);
  }, [step, stepsCount]);

  useEffect(() => {
    //Формирование точек по кругу при монтировании. можно просто расположить по координатам
    startPosition(CircleRef, step, stepsCount);
  }, []);

  return (
    <PointComponent ref={CircleRef}>
      <div className="circle-container">
        {ChildGenerator({ stepsCount, setStep, step, theme })}
      </div>
    </PointComponent>
  );
}

export default memo(Circle);
