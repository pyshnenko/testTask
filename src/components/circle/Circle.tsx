import React, { useRef, useEffect, memo, useContext } from "react";
import { ChildGenerator } from "./helpers/PointComponents";
import { PointComponent } from "./helpers/pointStyled";
import { rotateOnStep, startPosition } from "./helpers/animation";
import { gsap } from "gsap/gsap-core";
import { PageContext } from "../../store/context";

interface CircleProps {
  theme: string;
}

function Circle(props: CircleProps): React.JSX.Element {
  const { page, totalPages } = useContext(PageContext);

  const { theme } = props;

  const CircleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      gsap.killTweensOf(CircleRef.current);
    };
  }, []);

  useEffect(() => {
    //При изменении активного шага поворачиваем круг и точки
    rotateOnStep(CircleRef, page, totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    //Формирование точек по кругу при монтировании. можно просто расположить по координатам
    startPosition(CircleRef, page, totalPages);
    if (CircleRef.current) gsap.fromTo(CircleRef.current.querySelectorAll(".circle-container"), {
      width: 0,
      height: 0
    },{
      width: '30vw',
      height: '30vw',

    })
  }, []);

  return (
    <>
      <PointComponent ref={CircleRef}>
        <div className="circle-container">{ChildGenerator({ theme })}</div>
      </PointComponent>
    </>
  );
}

export default memo(Circle);
