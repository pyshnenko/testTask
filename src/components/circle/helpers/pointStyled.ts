import styled from "styled-components";

export const PointComponent = styled.div`
  // Добавляем типизацию CircleProps
  position: absolute;
  z-index: 1;

  .circle-container {
    position: relative;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    margin: 50px auto;
    border: 1px solid rgba(66, 86, 122, 0.1); /* Круглая линия */
    z-index: 1;
  }

  .point,
  .activePoint {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #42567a;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 0; /* Скрываем цифру изначально */
    transform: translate(-50%, -50%); /*  Центрируем точки на линии */
  }

  .point:hover,
  .activePoint {
    width: 56px;
    height: 56px;
    font-size: 16px; /* Отображаем цифру при наведении */
    border: 1px solid rgba(48, 62, 88, 0.5);
    background-color: #f4f5f9; /* Меняем цвет при наведении */
    font-size: 20px; /* Отображаем цифру при наведении */
  }

  /* Расположение точек */
  .point,
  .activePoint {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Стили для цифр внутри точек */
  .point::after {
    content: attr(data-number); /* Берем число из data-атрибута */
    display: none; /* Скрываем изначально */
  }

  .activePoint::after {
    content: attr(data-number); /* Берем число из data-атрибута */
  }
  .point:hover::after,
  .activePoint::after {
    display: block; /* Показываем при наведении */
    color: #42567a;
  }

  .point {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0; /* Скрываем цифру */
    color: #42567a;
  }
`;

export const StyledP = styled.p`
  position: absolute;
  color: #42567a;
  left: 80px;
`;
