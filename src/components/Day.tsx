import React from "react";


export default function Day(props:any) {
  return (
    <div className="datediv rounded-lg hover:bg-secondary hover:text-white ">
        <p>{props.day}</p>
        <p className="font-semibold">{props.weekday.charAt(0).toUpperCase()}</p>
    </div>
  )
}