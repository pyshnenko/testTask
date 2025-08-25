import React, {useRef, useContext, useState} from "react";
import { useGSAP } from "@gsap/react"; // Импортируем useGSAP
import stepYears from "../../lib/stepYears";
import Circle from "../circle/Circle";
import { gsap } from "gsap/gsap-core";
import { PageContext } from "../../store/context";
import { YearsBoxStyled, StyledLastDate, StyledNextDate } from "./styled";
import { baseMediaWidth } from "../../consts";

export default function YearsBox(): React.JSX.Element {

    const { page, pageWidth } = useContext(PageContext);

  const fYearRef = useRef<HTMLDivElement>(null);
  const sYearRef = useRef<HTMLDivElement>(null);  

    const [dates, setDates] = useState({
        first: 1980,
        second: 1986,
        theme: "Компьютеры",
    });

  useGSAP(() => {
      if (fYearRef.current) {
        gsap.to(fYearRef.current, {
          duration: 1,
          innerText: stepYears.get(page)?.first,
          snap: { innerText: 1 },
          ease: "power1.inOut",
          onUpdate: () => {
            setDates({...dates, first: parseInt(fYearRef.current?.innerText||'', 10)});
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
            setDates({...dates, second: parseInt(sYearRef.current?.innerText||'', 10)});
          },
        });
      }
    }, [page]);

    return (
        <YearsBoxStyled>
            <StyledLastDate ref={fYearRef}>{dates.first}</StyledLastDate>
            <StyledNextDate ref={sYearRef}>{dates.second}</StyledNextDate>
            {pageWidth>baseMediaWidth?<Circle
                theme={dates.theme}
            />:
            null}
        </YearsBoxStyled>
    )
}