import React from "react";
import ListPlan from "./ListPlan";


const Plans = () => {

  
  return (
    <div className="flex flex-col">
      <h3 className="font-semibold my-2">Planos</h3>
      <ListPlan />
      <div className="flex items-center w-3/6"></div>
    </div>
  );
};

export default Plans;
