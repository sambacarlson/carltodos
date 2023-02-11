import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showUpdateAlert } from '../1slices/uiControlSlice'
import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firestoreConfig'


export default function AlertUpdate(props:any) {
  const dispatch = useDispatch()
  const [updatedTodo, setUpdatedTodo] = React.useState('')
  // const show = useSelector((state:any)=>state.uiControl.showAlert)


  const updateTask = () => {
    console.log(props.id, props.task)
    if(updatedTodo.length < 1){
      console.log('task can not be and empty string', updatedTodo.length)
      return
    }
    else {
      const docRef = doc(db, 'todos', props.id)
      updateDoc(docRef, {
        task: updatedTodo
      })
        .then(()=>console.log('task updated successfully'))
        .catch((err) => console.log(err))
    }
  }


  return (
    <div className="flex flex-col justify-center font-open text-primary min-w-[315px] max-w-[420px] mx-auto my-2 space-y-2 rounded-lg shadow-md ring-1 ring-[#f0f0f0] p-3">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-secondary">Update task</h3>
        <div className="flex flex-row items-center justify-between border-gray hover:border-secondary border-[1px] px-3 py-1 rounded-xl text-primary">
          <h3 className="">Category</h3>
        </div>
      </div>
      <div className="w-full h-28">
        <textarea onChange={e=>setUpdatedTodo(e.target.value)} className=" resize-none w-full h-full outline-none p-2 ring-1 ring-[#f0f0f0]" />
      </div>
      <div className="flex flex-row items-center justify-end space-x-2">
        <div onClick={()=>{dispatch(showUpdateAlert(true)); setUpdatedTodo('')}} className="ring-1 ring-gray hover:text-secondary rounded-xl text-center w-20 py-1">Cancel</div>
        <div onClick={()=>{dispatch(showUpdateAlert(true)); updateTask();}} className="ring-1 ring-secondary hover:text-secondary rounded-xl text-center w-20 py-1">Done</div>
      </div>
    </div>
  )
}