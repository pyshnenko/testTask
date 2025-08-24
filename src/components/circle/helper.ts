export function positionGeneraton(nums: number, transmit: number = 1): string {
  const baseAngle = (Math.PI * 2) / nums;
  let extString = "";
  for (let i = 0; i < nums; i++) {
    const angle = baseAngle * (i - transmit);
    const y = Math.sin(angle) * 50 + 50;
    const x = Math.cos(angle) * 50 + 50;
    extString += `.point:nth-child(${i + 1}) { top: ${y}%; left: ${x}%; transform: translate(-50%, -50%); }\n`;
  }
  return extString;
}

export function coordinatesGeneration(
  nums: number,
  transmit: number = 1,
): { x: number; y: number }[] {
  const baseAngle = (Math.PI * 2) / nums;
  const coords = [];
  for (let i = 0; i < nums; i++) {
    const angle = baseAngle * (i - transmit);
    const y = Math.sin(angle) * 50 + 50;
    const x = Math.cos(angle) * 50 + 50;
    coords.push({ x, y });
  }
  return coords;
}

/*
.point:nth-child(1) { top: 0%; left: 50%; transform: translate(-50%, -50%); }
.point:nth-child(2) { top: 25%; left: 93%; transform: translate(-50%, -50%); }
.point:nth-child(3) { top: 77%; left: 93%; transform: translate(-50%, -50%); }
.point:nth-child(4) { top: 100%; left: 50%; transform: translate(-50%, -50%); }
.point:nth-child(5) { top: 77%; left: 7.5%; transform: translate(-50%, -50%); }
.point:nth-child(6) { top: 25%; left: 7.5%; transform: translate(-50%, -50%); }
*/
