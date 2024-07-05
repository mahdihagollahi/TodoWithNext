import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  interface TodosState {
    todos: Todo[];
  }
  

const initialState : TodosState= {
    todos : []
}


const todoslice = createSlice({
    name : 'todo',
    initialState ,
     reducers:{
        addTodo : (state , action:PayloadAction<{title:string}>

        ) =>{
            state.todos.push({
                id :Date.now() , 
                title: action.payload.title ,
                 completed: false  
            })
        },

        deleteTodo: (state, action:PayloadAction<{id : number}>) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload.id)
        },

        markTodo : (state , action:PayloadAction<{id:number}>) =>{
            state.todos = state.todos.map((todo)=>
                todo.id === action.payload.id
            ?{...todo , completed : !todo.completed}
            :todo
            )
        },


        editTodo : (state , action:PayloadAction<{id: number , title:string}>) => {
              state.todos = state.todos.map((todo) =>
                todo.id === action.payload.id
            ?{...todo , title : action.payload.title}
            :todo
            )
        }

      
     }
})


export const {addTodo , deleteTodo , markTodo , editTodo} = todoslice.actions

export default todoslice.reducer;

 