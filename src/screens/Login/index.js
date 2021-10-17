import { useNavigation, useRoute } from '@react-navigation/core';
import React,{useContext, useState} from 'react';
import LoginComponent from '../../components/login';
import loginUser from '../../context/actions/auth/loginUser';
import { GlobalContext } from '../../context/Provider';
const Login = () =>{
   const {params} = useRoute();

     const [form, setForm]= useState({});
     const [justSignedUp, setJustSignedUp]= useState(false);
     
     React.useEffect(() => {
   
      if(params?.data){
         setJustSignedUp(true);
         setForm({...form, username: params.data.username})

      }
     }, [params])
    

     const {authDispatch, authState:{loading, error},
   } = useContext(GlobalContext);
     const onSubmit=()=>{
        if(form.username && form.password){
           console.log(form);
            loginUser(form)(authDispatch);
        }
     }
     const onChange =({name,value})=>{
      setJustSignedUp(false);
      setForm({...form,[name]:value});
     }
 
    return(
       <LoginComponent
       form={form}
       error={error}
       onSubmit={onSubmit}
       onChange={onChange}
       loading={loading}
       justSignedUp={justSignedUp}
       />
    )
}
export default Login;