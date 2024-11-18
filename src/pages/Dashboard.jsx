import React, { useRef } from "react";
import DasboardHero from "../components/user-view/DasboardHero";
import DisplayTradeData from "../components/user-view/DisplayTradeData";
import Footer from "../components/user-view/Footer";
import SearchBar from "../components/user-view/SearchBar";


function Dashboard() {
  const displayTradeDataRef = useRef(null);
  const searchBarRef = useRef(null);

  const scrollToDisplayTradeData = () => {
    displayTradeDataRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSearchBar = () => {
    searchBarRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen dark:bg-black/25 antialiased">
      <DasboardHero onButtonOneClick={scrollToDisplayTradeData} onButtonTwoClick={scrollToSearchBar}/>
      <SearchBar ref={searchBarRef}/>
      <DisplayTradeData ref={displayTradeDataRef}/>
      <Footer/>
    </main>

  );
}

export default Dashboard;
