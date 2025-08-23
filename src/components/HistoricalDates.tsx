import * as React from "react";
import { TimelineHeader } from "./TimeLineHeader";
import { YearDisplay } from "./YearDisplay";

export function HistoricalDates() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="flex flex-col items-end px-20 w-full bg-slate-100 max-md:px-5 max-md:max-w-full">
        <main className="flex relative flex-col pt-44 pb-28 w-full max-w-[1440px] min-h-[1080px] max-md:py-24 max-md:max-w-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/c45b7c114af07bc6c63cca8830eadc406431048b?placeholderIfAbsent=true&apiKey=db17819974ba42048bd06358ef3d98a7"
            className="object-cover absolute inset-0 size-full"
            alt="Background"
          />
          <TimelineHeader />
          <YearDisplay />
        </main>
      </div>
    </div>
  );
}