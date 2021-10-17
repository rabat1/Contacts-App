import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from '../../../constants/actionsTypes/index';

import axiosInstance from "../../../helpers/axiosInterceptor";

export const clearAuthState=()=>(dispatch)=>{
    dispatch({
        type: CLEAR_AUTH_STATE,
    });
};
export default ({
    email,
    password,
    username,
    lastname: last_name,
    firstname: first_name
})=>(dispatch)=>(onSuccess)=>{
    dispatch({
            type:REGISTER_LOADING,
    })
    axiosInstance.post('auth/register',{
    email,
    password,
    username,
    last_name,
    first_name
    }).then((res)=>{
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data,
    })
    onSuccess(res.data);
    }).catch((err)=>{
        dispatch({
            type:REGISTER_FAIL,
         payload: err.response ? err.response.data:{error:'Something went wrong'}
    });
    });
};

