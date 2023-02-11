import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, query, updateDoc
} from "firebase/firestore";

import { db, todoRef } from '../firestoreConfig';

import AlertNew from '../components/AlertNew'
import Calendar from '../components/Calendar'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import TodoItem from '../components/TodoItem';
import { showAlert, showUpdateAlert } from '../1slices/uiControlSlice'
// import {createTodo, updateTodo, deleteTodo} from '../1slices/todoSlice'


export default function Home() {
  const showingAlert = useSelector((state: any) => state.uiControl.showAlert)
  const isNewTask = useSelector((state: any) => state.uiControl.updateTask)
  // const  tasklist2 = useSelector((state:any)=> state.todoControl.task)

  const [tasklist, setTaskList] = React.useState([])

  const dispatch = useDispatch()


  const q = query(todoRef)
  onSnapshot(q, snapshot=>{
    const taskl:any = []
    snapshot.docs.forEach(doc=>{
      taskl.push({...doc.data(), id:doc.id})
    })
    setTaskList(taskl)
  })



  
  return (
    <div className="flex flex-col p-2 py-4 space-y-3">
      <div className="mx-5">
        <Navbar />
      </div>
      <Calendar />
      <div className="flex flex-row items-start space-x-8">
        <div className="relative">
          <div className="absolute top-10 -left-10">
            <Category />
          </div>
        </div>
        <div className="w-11/12">
          {showingAlert &&
            <div className="absolute bg-white right-0 md:right-10">
              <AlertNew isNewTask={isNewTask} />
            </div>
          }
          {
            tasklist.map((t:any)=>{
              return<TodoItem task={t.task} id = {t.id} />
            })
          }
          <div onClick={() => {dispatch(showUpdateAlert(false)); dispatch(showAlert(true)); }} className="w-5/6 text-center mt-12 mx-auto rounded-lg py-1 ring-1 ring-secondary hover:bg-gray hover:text-white hover:ring-0">
            +
          </div>
        </div>
      </div>

    </div>
  )
}