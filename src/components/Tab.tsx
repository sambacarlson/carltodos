import React from "react";

export default function Tab(props:any){
  return (
    <div className="-rotate-90 flex items-center justify-center bg-gray text-white rounded-t-lg border-t-2 border-secondary w-28 hover:text-secondary hover:bg-white">
      {props.category}
    </div>
  )
}