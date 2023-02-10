import React from "react"


export default function TodoItem() {
  const [done, setDone] = React.useState(false)
  const [hovered, setHovered] = React.useState(false)
  const handleHover=() => setHovered(prevState=>!prevState)
  const handleStatus=() => setDone(prevState=>!prevState)
  return (
    <div className="todoItem flex flex-row items-start justify-start space-x-2 p-1" onMouseOver={handleHover} onMouseOut={handleHover} >
      <div className="text-primary pt-1" onClick={handleStatus}>
        {done ?
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"/></svg>
          :
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5z"/></svg>
        }
      </div>
      <div className="flex flex-col space-y-2">
        <p className=" font-open text-primary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita est eaque consectetur minus! Nostrum est ipsa itaque.</p>
        <div className="flex flex-row items-center justify-between text-gray px-4">
          <p className="font-open">11-02-23</p>
          {
            hovered && 
            <div className="flex flex-row items-center justify-end space-x-3">
              <div className="hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4.025q0-.425-.287-.7Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4.025q0 .425.288.7q.287.275.712.275Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 13q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-10Zm0 8q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Z"/></svg>
              </div>
              <div className="hover:text-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM4 21q-.425 0-.712-.288Q3 20.425 3 20v-2.825q0-.2.075-.387q.075-.188.225-.338l10.3-10.3l4.25 4.25l-10.3 10.3q-.15.15-.337.225q-.188.075-.388.075ZM14.325 9.675l-.7-.7l1.4 1.4Z"/></svg>
              </div>
            </div>
          }
          
        </div>
      </div>
    </div>
  )
}