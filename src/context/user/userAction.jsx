import React, { useReducer } from 'react';
import UserReducer from "./userReducer"
import UserContext from './userContext'
import axios from 'axios'


function UserAction(props){

     const userInitial={
            user:{},
            error:{},
         
        }
        const[state,dispatch]=useReducer(UserReducer,userInitial)
       
        const token = localStorage.getItem("token")
        const username = localStorage.getItem("username")
  

        const login= async (userdata)=>{
          
            try{
               const res = await  axios.post("http://localhost:4500/login", userdata)
              

              localStorage.setItem("token", res.data.token);
              localStorage.setItem("username", res.data.user['firstname']);

               dispatch({
                type: "GET_USER",
                payload: res.data.user,
              });

                           
                
            }catch(error){
                dispatch({
                    type: "USER_ERROR",
                    payload: error.response,
                  });
            }
            
        }



        const getUser= async ()=>{
            const config = {
                headers: {
                  token: token,
                }
            }
            try{
               const res = await  axios.get(`http://localhost:4500/${username}/getuser`,config)
              
               dispatch({
                type: "GET_USER",
                payload: res.data,
              });

                
               
                
            }catch(error){
                dispatch({
                    type: "USER_ERROR",
                    payload: error.response,
                  });
            }
            
        }



        const updateUser= async (userdata,username,token)=>{
            const config = {
                headers:{
                    "token":token
                }
            }
            try{
               const res =await  axios.put(`http://localhost:4500/${username}/update`, userdata,config)
               dispatch({
                type: "GET_USER",
                payload: {...res.data},
              });
            

           
            localStorage.setItem("username", res.data['firstname']);
            

            }catch(error){
                console.log(error);
                dispatch({
                    type: "USER_ERROR",
                    payload: error.response,
                  });
            }
            
        }

    return(
        <UserContext.Provider value={{
            user:state.user,
            error:state.error,
            login,
            updateUser,
            getUser

        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserAction;
