import React from 'react'


export default function Alert(props:any) {
  const [choose, setChoose] = React.useState(false)
  const handleChoose = () => setChoose(prevState => !prevState)
  const isNewtask = props.isNewTask
  return (
    <div className="flex flex-col justify-center font-open text-primary min-w-[315px] max-w-[420px] mx-auto my-2 space-y-2 rounded-lg shadow-md ring-1 ring-[#f0f0f0] p-3">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-secondary">{isNewtask ? "New task" : "Update task"}</h3>
        <div className="flex flex-row items-center justify-between border-gray hover:border-secondary border-[1px] px-3 py-1 rounded-xl text-primary">
          <h3 className="">Category</h3>
          <div className="relative">
            {
              choose ?
                <div>
                  <div onClick={handleChoose}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.29 8.71L6.7 13.3a.996.996 0 1 0 1.41 1.41L12 10.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 8.71a.996.996 0 0 0-1.41 0z" /></svg>
                  </div>
                  <div className="absolute -left-36 top-8 w-48 ring-1 ring-secondary bg-white rounded-md px-2 py-1 max-h-28 overflow-scroll">
                    <ul onClick={handleChoose} className="style-none whitespace-nowrap underline flex flex-col items-end space-y-2">
                      <li>Routine</li>
                      <li>Work</li>
                      <li>Church</li>
                      <li>General</li>
                    </ul>
                    <div className="flex flex-row my-2 ring-1 ring-gray ">
                      <input type="text" className="outline-none w-32" />
                      <div onClick={()=>{handleChoose(); console.log('added task');}} className=" text-white font-bold bg-primary w-full text-center">+</div>
                    </div>
                  </div>
                </div>
                :
                <div onClick={handleChoose}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.88 9.29L12 13.17L8.12 9.29a.996.996 0 1 0-1.41 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59a.996.996 0 0 0 0-1.41c-.39-.38-1.03-.39-1.42 0z" /></svg>
                </div>
            }

          </div>
        </div>
      </div>
      <div className="w-full h-28">
        <textarea placeholder="start typing ..." className=" resize-none w-full h-full outline-none p-2 ring-1 ring-[#f0f0f0]" />
      </div>
      <div className="flex flex-row items-center justify-end space-x-2">
        <div className="ring-1 ring-gray hover:text-secondary rounded-xl text-center w-20 py-1">Cancel</div>
        <div className="ring-1 ring-secondary hover:text-secondary rounded-xl text-center w-20 py-1">{isNewtask ? "Add" : "Done"}</div>
      </div>
    </div>
  )
}