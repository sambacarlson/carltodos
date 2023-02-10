import React from 'react'
import Alert from '../components/Alert'
import Calendar from '../components/Calendar'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import TodoList from '../components/TodoList'


export default function Home() {
  const [addingNew, setAddingNew] = React.useState(false)
  const addTask = () => {
    setAddingNew(prevState=>!prevState)
  }
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
          {addingNew &&
            <div className="absolute bg-white right-0 md:right-10">
              <Alert isNewTask />
            </div>
          }
          <TodoList />
          <div onClick={addTask} className="w-5/6 text-center mt-12 mx-auto rounded-lg py-1 ring-1 ring-secondary hover:bg-gray hover:text-white hover:ring-0">
            +
          </div>
        </div>
      </div>
      
    </div>
  )
}