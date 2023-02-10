import React from "react";
import Day from "./Day";


export default function Calendar() {
 const [dates, setDates] = React.useState({day:23, weekday:'monday'})
 const week:any = [
  {key:1, day:12, weekday:"monday"},
  {key:2, day:13, weekday:"tuesday"},
  {key:3, day:14, weekday:"wednesday"},
  {key:4, day:15, weekday:"thursday"},
  {key:5, day:16, weekday:"friday"},
  {key:6, day:17, weekday:"saturday"},
  {key:7, day:18, weekday:"sunday"},
 ]
  return (
    <div className="flex flex-col items-center p-2">
      <div className="grid grid-cols-7 w-full">
        {
          week.map((date:any)=><Day {...date}/>)
        }
      </div>
      <hr className="w-full border-secondary"/>
    </div>
    
  )
}