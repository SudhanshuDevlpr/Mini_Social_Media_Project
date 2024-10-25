import { createContext, useReducer } from "react";

// Define CONTENT_TO_PRINT first
const CONTENT_TO_PRINT = [
  {
    id: '1',
    title: 'work', // Fixed typo
    body:'going to mumbai for working process after complete my work I will give party to evryone',
    reactions:'2',
    user_id:'user_20',
    tags:['working','greak','journey','real_time']
  },
  {
    id: '2',
    title: 'work', // Fixed typo
    body:'going to mumbai for working process after complete my work I will give party to evryone',
    reactions:'2',
    user_id:'user_20',
    tags:['working','greak','journey','real_time']
  },
  {
  id: '3',
  title: 'work', // Fixed typo
  body:'going to mumbai for working process after complete my work I will give party to evryone',
  reactions:'2',
  user_id:'user_20',
  tags:['working','greak','journey','real_time']
  },
  {
    id: '4',
    title: 'work', // Fixed typo
    body:'going to mumbai for working process after complete my work I will give party to evryone',
    reactions:'2',
    user_id:'user_20',
    tags:['working','greak','journey','real_time']
  }
];

// Create the Context
export const refContext = createContext({
  paintpost:{},
  addPost:()=>{},//these three functionallity we want use in our card post functionallity
  deletePost:()=>{}//so the basic functionallity or all functionallity f any component we need 
                    //declaire inside createContext for acess by value
});                    //in create context we pass every functionallity 
                    //Is always decalire inside createContext after declaring 
                    //this the we can use in value                   
                    //the functionallity which used by that component
const setPostNumberReducer=(CurrentValue,action)=>{
return CurrentValue;
}
// Create the Provider Component
function MyProvider({ children }) { // Fixed prop name
  const [paintpost,dispatchpostNumber]=useReducer(setPostNumberReducer,CONTENT_TO_PRINT)
  //useReduce is a use manage the state first CONTENT_TO_PRINT is default value of that state
  //because of this we passed and after this refContext has a value CONTENT_TO_PRINT
  //refCOntext is passed in create context thent it is acssesible by element thorugh value 
  //use to set the state if it become complex state the we use this hook
  const addPost=()=>{

  };//difinition of addPost which is pass in create context
  //it work when we do some changes in component like add
  const deletePost=()=>{

  };//difinition of DeletePost which is pass in create context
  ////it work when we do some changes in component like delete
  return (
    <refContext.Provider value={ paintpost}>
    {children}
  </refContext.Provider>
  );
}

export default MyProvider;
