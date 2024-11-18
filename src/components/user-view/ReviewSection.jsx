import React from 'react'
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const tradingDashboardTestimonials = [
    {
        quote:
          "Using TradingDashboard completely transformed my approach to analyzing market data. The insights provided helped me make smarter, data-driven decisions.",
        name: 'Alex Johnson',
        title: 'Financial Analyst',
      },
      {
        quote:
          "The community and resources on this platform are outstanding. I've not only sharpened my skills as an investor but also expanded my understanding of real-time data analysis.",
        name: 'Samantha Lee',
        title: 'Stock Market Investor',
      },
      {
        quote:
          "TradingDashboard gave me the tools and confidence to optimize my trading strategies. I’m incredibly grateful for the intuitive interface and powerful analytics.",
        name: 'Michael Chen',
        title: 'Day Trader',
      },
      {
        quote:
          "As a portfolio manager, finding reliable tools can be challenging, but TradingDashboard offers everything I need to track, analyze, and adjust my portfolios effectively.",
        name: 'Emily Taylor',
        title: 'Portfolio Manager',
      },
      {
        quote:
          "The performance comparison tools here opened my eyes to the impact of database selection on trade execution. A must-have tool for serious market professionals!",
        name: 'Chris Morales',
        title: 'Data Engineer',
      },
      
];


function ReviewSection() {
  return (
    <div className="h-[25rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Insights of Excellence: Stories from Our Users</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
                <InfiniteMovingCards
                    items={tradingDashboardTestimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    </div>
  )
}

export default ReviewSection