import { configureStore } from "@reduxjs/toolkit";
import todoslice from './todoslice'

 const store = configureStore({
   reducer : {
    todo : todoslice 
   }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store



