import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import PriceList from "./Component/PriceList/PriceList";
import Dashboard from "./Component/Dashboard/Dashboard";
import PhoneBar from "./Component/PhoneBar/PhoneBar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-7xl font-bold">hello</h1>
      <PriceList />
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  );
};

export default App;
