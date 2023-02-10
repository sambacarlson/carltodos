import React from 'react'
import Tab from './Tab'

export default function Category() {
  const categories:any = [
    {key:1, category:'Routine'}, 
    {key:2, category:'Church'}, 
    {key:3, category:'Family'}, 
    {key:4, category:'Work'},
    {key:5, category:'office'},
  ]
  return (
    <div className="flex flex-col space-y-[87px] w-20">
      {
        categories.map((cat:any) => <Tab {...cat} />)
      }
    </div>
  )
}