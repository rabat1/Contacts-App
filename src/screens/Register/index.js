import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/native';
import React, { useContext } from 'react';
import { useState } from 'react';
import RegisterComponent from '../../components/SignUp';
import envs from '../../config/env';
import { LOGIN } from '../../constants/routeNames';
import register,{clearAuthState} from '../../context/actions/auth/register';
import { GlobalContext } from '../../context/Provider';
import axiosInstance from '../../helpers/axiosInterceptor';

const Register = () =>{
    
    const [form, setForm]= useState({});
    const {navigate} = useNavigation();
    const [errors, setError]= useState({});
   
    const {authDispatch, authState:{loading, error, data},
} = useContext(GlobalContext);



   useFocusEffect(
    React.useCallback(() => {
        return()=>{
            if(data || error){
                console.log('tm batao');
              clearAuthState()(authDispatch);
      
            }
        };
     
    }, [data,error])
  );

    const onChange =({name,value})=>{
       setForm({...form,[name]:value});
       if(value !==""){

            if(name==='password'){
                if(value.length < 6) {
                    setError(prev=>{
                        return {...prev, [name]:"Length shoul be > 5"};
                    });
                } else{
                    setError(prev=>{
                        return {...prev, [name]:null};
                    });
                }
            }else{
                setError(prev=>{
                    return {...prev, [name]:null};
                });
            }
       } else{
        setError(prev=>{
            return {...prev, [name]:"It's required"};
        });
       }
    };
    const onSubmit=()=>{
            console.log('pressed');
            if(!form.username){
                setError(prev=>{
                    return {...prev, username:'Please enter userName'}
                })
            };
            if(!form.firstname){
                setError(prev=>{
                    return {...prev, username:'Please enter firstName'}
                })
            };
            if(!form.lastname){
                setError(prev=>{
                    return {...prev, lastname:'Please enter lastName'}
                })
            } if(!form.email){
                setError(prev=>{
                    return {...prev, email:'Please enter Email'}
                })
            } if(!form.password){
                setError(prev=>{
                    return {...prev, password:'Please enter Password'}
                })
            }
            if(
            Object.values(form).length===5 &&
            Object.values(form).every((item)=>item.trim().length>0) &&
            Object.values(errors).every((item)=> !item)
            ){
                     
                register(form)(authDispatch)((response)=>{
                    navigate(LOGIN,{data: response});
                });
            };
    };
    
    return(
       <RegisterComponent 
       form={form}
       errors={errors} 
       error={error}
       onSubmit={onSubmit}
       onChange={onChange}
       loading={loading}
       />
    )
}
export default Register;
