import React from 'react'
import { ContainerScroll } from "../ui/container-scroll-animation";
import TradingDashboard from "../../assets/Trading Dashboard.webp"

function ScrollSection() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Real-Time Trading Insights <br/>
              </span>
            </h1>
          </>
        }
      >
        <img
          src={TradingDashboard}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}

export default ScrollSection