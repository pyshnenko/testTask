import { TimelineEvents } from "./TimelineEvents";

export function YearDisplay() {
  return (
    <section className="flex relative flex-col pr-10 pl-20 mt-24 mb-0 w-full max-md:px-5 max-md:mt-10 max-md:mb-2.5 max-md:max-w-full">
      <h2 className="self-center font-bold tracking-tighter leading-none text-center text-blue-300 text-[160px] max-md:max-w-full max-md:text-4xl">
        <span style={{color: "rgba(93,95,239,1)"}}>2015 </span>
        <span style={{color: "rgba(239,93,168,1)"}}>2022</span>
      </h2>
      <div className="self-start mt-36 text-sm text-slate-600 max-md:mt-10">
        06/06
      </div>
      <TimelineEvents />
    </section>
  );
}