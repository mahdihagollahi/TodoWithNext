"use client"

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { markTodo,deleteTodo , editTodo, Todo  } from '../Redux/todoslice'

 interface User {
  todo: Todo;

 }


const Todos:React.FC<User> = ({todo}) =>{
    const dispatch = useDispatch()

    const[isEdit , setIsEdit] = useState<boolean>(false)

    const[newTitle , setNewTitle] = useState<string>(todo.title)

    const handleEdit = (event : React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        dispatch(editTodo({id:todo.id, title:newTitle}));
        setIsEdit(false);
      }
    };
  return (
    <div>
 <li className="relative flex items-center justify-between px-2 py-6 border-b">
    {isEdit ? (
          <div className="w-full flex items-center justify-between">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleEdit}
            placeholder="Type here"
            className="input input-bordered input-xs w-full max-w-xs"
          />


         


          <button
            className="btn btn-circle btn-outline"
            onClick={() => setIsEdit(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>


          
        </div>
      ) : (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              checked={todo.completed}
              onChange={() => dispatch(markTodo({id:todo.id}))}
            />
          


            
            <span className={todo.completed ? 'line-through' : ''} style={{ marginLeft: "8px" }}>{todo.title}</span>
          </div>
          <div className="flex gap-3 items-center">
            <button
              className="btn btn-circle btn-outline"
              onClick={() => setIsEdit(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button
              className="btn btn-circle btn-outline"
              onClick={() => dispatch(deleteTodo({id:todo.id}))}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>


           


          </div>
        </div>
    )}
 </li>
    </div>
  )
}

export default Todos



