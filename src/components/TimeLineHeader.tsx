import * as React from "react";

export function TimelineHeader() {
  return (
    <header className="flex relative flex-wrap gap-5 justify-between max-w-full whitespace-nowrap text-slate-600 w-[929px]">
      <div className="flex gap-10 text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/71f7b43c10c856ed2b1c39023670eb89f648de94?placeholderIfAbsent=true&apiKey=db17819974ba42048bd06358ef3d98a7"
          className="object-contain shrink-0 my-auto aspect-[0.04] w-[5px]"
          alt="Decorative line"
        />
        <h1 className="flex-auto max-md:text-4xl max-md:leading-[54px]">
          Исторические
          <br />
          даты
        </h1>
      </div>
      <nav className="flex gap-10 my-auto text-xl">
        <div>6</div>
        <div className="font-bold">
          Наука
        </div>
      </nav>
    </header>
  );
}